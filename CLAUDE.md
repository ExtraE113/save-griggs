# SaveGriggs.org

A static website to petition the Town of Brookline to select a contractor who will keep portions of Griggs Park open during renovation.

## Project Overview

The Town of Brookline is planning to shut down Griggs Park for an extended renovation. Our goal is to collect signatures
and encourage residents to contact town officials, requesting a contractor who will only close one section of the park at a time.

## Technical Stack

- **Frontend**: Static HTML/CSS/JavaScript (no framework needed for simplicity)
- **Backend**: Google Forms API (embedded form submission via iframe or direct POST)
- **Hosting**: Static hosting (GitHub Pages, Netlify, or similar)
- **Mobile**: Mobile-first responsive design

## Architecture

### Data Collection (Google Forms)

We use Google Forms as a serverless backend. The form should have two fields:
1. Name (required)
2. Email (optional)

The form is submitted in two stages:
1. First submission: Name only (ensures we capture the signature even if user abandons)
2. Second submission: Email (if provided)

**Important**: We need to submit the name immediately when the user completes step 1, before they proceed to step 2.

### User Flows

#### Flow 1: "Sign Our Petition"
1. User clicks "Sign Our Petition"
2. Modal/form appears asking for name
3. User enters name and clicks "Next"
4. **Name is immediately submitted to Google Forms**
5. User is asked for email (optional)
6. If email provided, submit to Google Forms
7. Show thank you message

#### Flow 2: "Sign and Send Email"
1. Same as Flow 1, steps 1-6
2. After completion, show "Send Email" button
3. Clicking opens `mailto:` link with:
   - TO: [list of town official emails - TBD]
   - BCC: ezra@savegriggs.org
   - Subject: [pre-filled]
   - Body: [pre-filled message]

## File Structure

```
/
├── index.html          # Main landing page
├── styles.css          # All styles (mobile-first)
├── app.js              # Form handling, Google Forms submission
├── CLAUDE.md           # This file
└── README.md           # Public-facing readme
```

## Google Forms Integration

To submit to Google Forms without showing the form:
1. Create a Google Form with Name and Email fields
2. Get the form's action URL and field entry IDs
3. Submit via fetch() POST request or hidden iframe

Example form submission:
```javascript
const formData = new FormData();
formData.append('entry.XXXXXXX', name);  // Replace with actual entry ID
formData.append('entry.YYYYYYY', email); // Replace with actual entry ID

fetch('https://docs.google.com/forms/d/e/FORM_ID/formResponse', {
  method: 'POST',
  mode: 'no-cors',  // Required for cross-origin Google Forms
  body: formData
});
```

## Configuration Required

Before deployment, the following must be configured:

1. **Google Form URL**: Create form and get the formResponse URL
2. **Form Field IDs**: Get entry.XXXXX IDs for Name and Email fields
3. **Town Official Emails**: List of email addresses for the mailto link
4. **Email Subject/Body**: Pre-written email content

## Design Guidelines

- Clean, professional look appropriate for civic engagement
- Green/nature color scheme (park theme)
- Large, accessible buttons
- Clear call-to-action
- Mobile-first: works great on phones
- Fast loading: minimal dependencies

## Important Notes

- No TypeScript casting - use proper types
- Wrap non-essential operations (like analytics) in try-catch
- Don't commit unless explicitly told to
- Test on mobile devices
- Ensure form submissions work even with ad blockers