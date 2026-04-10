import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { demoRequestSchema } from "@/lib/validation/demo-request";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const parsed = demoRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please review the demo request fields and try again." },
      { status: 400 },
    );
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.from("demo_requests").insert({
      name: parsed.data.name,
      email: parsed.data.email.toLowerCase(),
      company: parsed.data.company,
      use_case: parsed.data.useCase,
      timeline: parsed.data.timeline,
    });

    if (error) {
      return NextResponse.json(
        {
          error:
            error.code === "23505"
              ? "That demo request already exists."
              : "We could not save the demo request.",
        },
        { status: error.code === "23505" ? 409 : 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      message:
        "Demo request received. We will follow up when the schedule is ready.",
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "Demo capture is not configured yet. Set the Supabase environment variables and try again.",
      },
      { status: 503 },
    );
  }
}
