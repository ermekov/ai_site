# Google Sheets webhook setup

This folder contains the Google Apps Script code that receives website form submissions and appends them to this spreadsheet:

`1VSbyEJtSZrbdoWPg395mEa8vhbC7jLlCHkQ9gy-Z15Q`

## Setup

1. Open the Google Sheet.
2. Go to `Extensions` -> `Apps Script`.
3. Replace the default code with `google-sheets-webhook/Code.gs`.
4. Click `Deploy` -> `New deployment`.
5. Select type: `Web app`.
6. Set:
   - Execute as: `Me`
   - Who has access: `Anyone`
7. Copy the Web App URL. It should look like:
   `https://script.google.com/macros/s/.../exec`
8. Paste that URL into `script.js`:

```js
const GOOGLE_SHEETS_WEBHOOK_URL = "PASTE_WEB_APP_URL_HERE";
```

9. Commit and push the change.

After GitHub Pages updates, every submitted lead form will be appended to the sheet.
