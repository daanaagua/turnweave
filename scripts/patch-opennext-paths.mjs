import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd().replace(/\\/g, "/");
const openNextRoot = `${projectRoot}/.open-next/server-functions/default/`;

const replacements = [
  {
    file: "handler.mjs",
    from: openNextRoot,
    to: "./",
  },
];

const workerRedirectFrom = `            const url = new URL(request.url);
            // Serve images in development.`;

const workerRedirectTo = `            const url = new URL(request.url);
            if (url.hostname === "www.turnweave.com") {
                url.hostname = "turnweave.com";
                url.protocol = "https:";
                return Response.redirect(url, 308);
            }
            // Serve images in development.`;

async function patchFile({ file, from, to }) {
  const target = path.join(process.cwd(), ".open-next", "server-functions", "default", file);
  const original = await readFile(target, "utf8");
  const patched = original.split(from).join(to);

  if (original !== patched) {
    await writeFile(target, patched, "utf8");
    return { file, changed: true, count: original.split(from).length - 1 };
  }

  return { file, changed: false, count: 0 };
}

const results = await Promise.all(replacements.map(patchFile));

const workerPath = path.join(process.cwd(), ".open-next", "worker.js");
const workerOriginal = await readFile(workerPath, "utf8");
const workerPatched = workerOriginal.includes(workerRedirectTo)
  ? workerOriginal
  : workerOriginal.replace(workerRedirectFrom, workerRedirectTo);

if (workerOriginal !== workerPatched) {
  await writeFile(workerPath, workerPatched, "utf8");
  results.push({ file: "worker.js", changed: true, count: 1 });
} else {
  results.push({ file: "worker.js", changed: false, count: 0 });
}

for (const result of results) {
  if (result.changed) {
    console.log(`patched ${result.file}: ${result.count} replacement(s)`);
  } else {
    console.log(`no changes in ${result.file}`);
  }
}
