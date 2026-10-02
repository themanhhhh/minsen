type FormType = "rfq" | "registration";

const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL;

export async function submitFormToGoogleSheets(
  formType: FormType,
  data: Record<string, string>,
) {
  if (!endpoint) {
    return false;
  }

  try {
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
      },
      body: JSON.stringify({ formType, data }),
    });
    return true;
  } catch {
    return false;
  }
}
