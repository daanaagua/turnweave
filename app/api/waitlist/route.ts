import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { waitlistSchema } from "@/lib/validation/waitlist";

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

  const parsed = waitlistSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please review the waitlist fields and try again." },
      { status: 400 },
    );
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.from("waitlist_entries").insert({
      email: parsed.data.email.toLowerCase(),
      interest: parsed.data.interest,
    });

    if (error) {
      return NextResponse.json(
        {
          error:
            error.code === "23505"
              ? "That email is already on the waitlist."
              : "We could not save the waitlist entry.",
        },
        { status: error.code === "23505" ? 409 : 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      message:
        "You are on the waitlist. We will reach out when access opens.",
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "Waitlist capture is not configured yet. Set the Supabase environment variables and try again.",
      },
      { status: 503 },
    );
  }
}
