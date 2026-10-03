type FormType = "rfq" | "registration";

const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL;
const formTypes = new Set<FormType>(["rfq", "registration"]);

export async function POST(request: Request) {
  if (!endpoint) {
    return Response.json({ ok: false, message: "Google Sheets endpoint is not configured." }, { status: 500 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  if (
    typeof payload !== "object" ||
    payload === null ||
    !("formType" in payload) ||
    typeof payload.formType !== "string" ||
    !formTypes.has(payload.formType as FormType) ||
    !("data" in payload) ||
    typeof payload.data !== "object" ||
    payload.data === null
  ) {
    return Response.json({ ok: false, message: "Invalid form submission." }, { status: 400 });
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      return Response.json({ ok: false, message: "Google Sheets rejected the submission." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, message: "Could not reach Google Sheets." }, { status: 502 });
  }
}
