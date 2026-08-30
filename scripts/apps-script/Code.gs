/**
 * SLPA — website membership registrations.
 *
 * Receives registrations from the /join form on myslpa.org, appends each one to a
 * sheet, and sends the registrant a welcome email.
 *
 * This file is version-controlled here, but it RUNS inside Google Apps Script:
 * paste it into Extensions -> Apps Script on the registrations spreadsheet.
 * Deployment steps and the column list are in docs/MEMBERSHIP-FORM.md.
 *
 * After editing, redeploy with Deploy -> Manage deployments -> edit -> New version.
 * Creating a brand-new deployment issues a DIFFERENT /exec URL, which would then
 * need updating in .env.local and in Vercel.
 */

// Must match APPS_SCRIPT_TOKEN in .env.local and in Vercel.
var TOKEN = 'REPLACE_WITH_A_LONG_RANDOM_STRING';

var SHEET_NAME = 'Website Registrations';

var HEADERS = [
  'timestamp',
  'first_name',
  'last_name',
  'full_name',
  'email',
  'location',
  'phone',
  'contact_pref',
  'contact_pref_other',
  'committee_interest',
  'committee_other',
  'profession',
  'heard_about',
  'source',
  'status',
];

function doPost(e) {
  try {
    if (!TOKEN || TOKEN === 'REPLACE_WITH_A_LONG_RANDOM_STRING') {
      return json_({ ok: false, error: 'Script token is not configured.' });
    }
    if (!e || !e.postData || !e.postData.contents) {
      return json_({ ok: false, error: 'Empty request.' });
    }

    var body = JSON.parse(e.postData.contents);
    if (body.token !== TOKEN) {
      return json_({ ok: false, error: 'Unauthorized.' });
    }

    // Two people registering at the same moment could otherwise append onto the
    // same row. Serialize the write.
    var lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      sheet_().appendRow([
        new Date(),
        body.firstName || '',
        body.lastName || '',
        ((body.firstName || '') + ' ' + (body.lastName || '')).trim(),
        body.email || '',
        body.location || '',
        body.phone || '',
        body.contactPref || '',
        body.contactPrefOther || '',
        body.committee || '',
        body.committeeOther || '',
        body.profession || '',
        body.heardAbout || '',
        'website',
        'new',
      ]);
    } finally {
      lock.releaseLock();
    }

    // The row is already saved, so a mail failure must not fail the request:
    // losing a welcome email is recoverable, losing a registration is not.
    sendWelcome_(body);

    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: String(err) });
  }
}

// Visiting the /exec URL in a browser should say something useful.
function doGet() {
  return json_({ ok: true, message: 'SLPA registration endpoint is live.' });
}

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function sendWelcome_(body) {
  try {
    if (!body.email) return;
    var name = (body.firstName || '').trim();
    MailApp.sendEmail({
      to: body.email,
      name: 'Somaliland Professionals Association of America',
      subject: 'Welcome to SLPA',
      body: [
        name ? 'Hi ' + name + ',' : 'Hi,',
        '',
        'Thanks for registering with the Somaliland Professionals Association of America.',
        'You are now on our member list.',
        '',
        'What happens next: someone from the team will reach out through the channel',
        'you told us you prefer. In the meantime, you are welcome at our regional',
        'meet-ups and at the annual conference.',
        '',
        'Conference and past recaps: https://myslpa.org/conference',
        'Programs and mentorship: https://myslpa.org/programs',
        '',
        'Questions any time: myslpa.info@gmail.com',
        '',
        'Moving the next generation forward,',
        'SLPA',
      ].join('\n'),
    });
  } catch (err) {
    console.error('welcome email failed: ' + err);
  }
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
