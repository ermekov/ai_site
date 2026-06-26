const SPREADSHEET_ID = "1VSbyEJtSZrbdoWPg395mEa8vhbC7jLlCHkQ9gy-Z15Q";
const SHEET_NAME = "";

const HEADERS = [
  "Submitted at",
  "Language",
  "Name",
  "Company",
  "Business type",
  "Service",
  "Service value",
  "Channel",
  "Channel value",
  "Monthly messages",
  "Monthly messages value",
  "Preferred contact",
  "Preferred contact value",
  "Contact",
  "Goal",
  "Page URL",
  "User agent"
];

function doGet() {
  return jsonResponse({
    ok: true,
    message: "Orda AI Studio Google Sheets webhook is running."
  });
}

function doPost(event) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const params = event.parameter || {};
    const sheet = getTargetSheet();
    ensureHeaders(sheet);

    sheet.appendRow([
      params.submitted_at || new Date().toISOString(),
      params.language || "",
      params.name || "",
      params.company || "",
      params.business_type || "",
      params.service || "",
      params.service_value || "",
      params.channel || "",
      params.channel_value || "",
      params.message_volume || "",
      params.message_volume_value || "",
      params.preferred_contact || "",
      params.preferred_contact_value || "",
      params.contact || "",
      params.goal || "",
      params.page_url || "",
      params.user_agent || ""
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({
      ok: false,
      error: error && error.message ? error.message : String(error)
    });
  } finally {
    lock.releaseLock();
  }
}

function getTargetSheet() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);

  if (SHEET_NAME) {
    return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  }

  return spreadsheet.getSheets()[0];
}

function ensureHeaders(sheet) {
  if (sheet.getLastRow() > 0) return;

  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.setFrozenRows(1);
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
