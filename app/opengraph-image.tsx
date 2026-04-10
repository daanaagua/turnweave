import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "Turnweave public shell";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 18% 20%, rgba(208, 185, 150, 0.28), transparent 24%), radial-gradient(circle at 78% 18%, rgba(127, 185, 173, 0.28), transparent 20%), linear-gradient(135deg, #0b1016 0%, #121824 55%, #0c1118 100%)",
          color: "#edf1f7",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0 0 auto 0",
            height: 14,
            background:
              "linear-gradient(90deg, rgba(208, 185, 150, 0.95), rgba(127, 185, 173, 0.95))",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "72px 72px 64px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 760 }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "10px 14px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
                color: "rgba(237, 241, 247, 0.82)",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontSize: 20,
              }}
            >
              {siteConfig.shortName}
            </div>
            <div
              style={{
                fontSize: 72,
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
                fontWeight: 700,
              }}
            >
              Website agents, roleplay training, and a platform-ready shell.
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.45, color: "rgba(237, 241, 247, 0.78)" }}>
              SSR marketing pages for a premium voice product, framed for search and future expansion.
            </div>
          </div>
          <div style={{ display: "flex", gap: 22, alignItems: "flex-end" }}>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                padding: 28,
                borderRadius: 32,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(18px)",
              }}
            >
              <div style={{ fontSize: 18, color: "rgba(237, 241, 247, 0.68)" }}>Public routes</div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {["Homepage", "Product", "Pricing", "Docs", "Scenarios", "Legal"].map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: "12px 16px",
                      borderRadius: 999,
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(0,0,0,0.18)",
                      fontSize: 18,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                width: 280,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                ["Website Agents", "Lead capture and guided discovery"],
                ["Roleplay", "Practice scenes for teams"],
                ["Platform", "Reserved for future expansion"],
              ].map(([title, body]) => (
                <div
                  key={title}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 18,
                    borderRadius: 24,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(13, 17, 23, 0.72)",
                  }}
                >
                  <div style={{ fontSize: 20, fontWeight: 700 }}>{title}</div>
                  <div style={{ marginTop: 8, fontSize: 16, color: "rgba(237, 241, 247, 0.72)" }}>
                    {body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
