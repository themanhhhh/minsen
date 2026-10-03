type FormType = "rfq" | "registration";

export async function submitFormToGoogleSheets(
  formType: FormType,
  data: Record<string, string>,
) {
  try {
    const response = await fetch("/api/form-submission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formType, data }),
    });
    return response.ok;
  } catch {
    return false;
  }
}
