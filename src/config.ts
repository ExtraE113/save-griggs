// ============================================
// CONFIGURATION - Edit these values as needed
// ============================================

// Email addresses for town officials (TO field)
export const RECIPIENT_EMAILS: string[] = [
    "parkandreccommission@brooklinema.gov",
    "greendog@brooklinema.gov",
    "parks@brooklinema.gov",
    "mpradhan@brooklinema.gov", // Title: Parks and Open Space Director
    "akraemer@brooklinema.gov", // Park architect
    "avecchio@brooklinema.gov", // Title: Parks & Open Space Division Director
    "tdavis@brooklinema.gov", // Title: Recreation Department Director
    "clarabatchelor@yahoo.com", // Commission chair
];

// BCC email for tracking responses
export const BCC_EMAIL = "ezra@savegriggs.org";

// Email subject line
export const EMAIL_SUBJECTS: string[] = [
    "Please Keep Griggs Park Partially Open During Renovation",
    "Keep Griggs Park Accessible During Renovation",
    "Don't Close All of Griggs Park at Once",
    "Griggs Park: Please Keep Sections Open During Construction",
    "A Request Regarding the Griggs Park Renovation",
    "Phased Construction for Griggs Park",
    "Keep Part of Griggs Park Open During Construction",
    "A Note on the Griggs Park Renovation",
    "Keep Griggs Park Open While You Renovate It",
    "Regarding Griggs Park Construction",
    "Don't Shut Down All of Griggs Park",
    "Please Don't Close Griggs Park Completely",
    "Thoughts on the Griggs Park Renovation",
    "Griggs Park Access During Construction",
    "Please Consider Phasing the Griggs Park Renovation",
    "Request to Maintain Partial Access to Griggs Park",
    "Keeping Griggs Park Usable During Construction",
    "A Community Request About Griggs Park Access",
    "Phased Renovation Approach for Griggs Park",
    "Preserving Some Public Access to Griggs Park During Renovation",
    "Griggs Park Renovation: Request for Partial Closure",
    "Maintaining Community Access to Griggs Park",
    "Request for Staged Construction at Griggs Park",
    "Please Keep Portions of Griggs Park Available",
    "Griggs Park Construction and Community Access",
    "A Thoughtful Request Regarding Griggs Park Renovations",
    "Access Considerations for Griggs Park Renovation",
    "Community Use of Griggs Park During Construction",
    "Request to Avoid Full Closure of Griggs Park",
    "Keeping Griggs Park Partially Accessible for Neighbors",
    "Griggs Park Renovation and Public Access",
    "Please Consider a Staggered Closure for Griggs Park",
    "Ensuring Continued Access to Griggs Park During Renovation",
    "A Request for Partial Park Access During Griggs Renovation"
];

export const EMAIL_SIGNATURES: string[] = [
    "Best,",
    "Thank you,",
    "Sincerely,",
    "Regards,"
];

export const GREETINGS: string[] = [
    "Hello,",
    "To whom it may concern,",
    "Dear Town Officials,",
    "Hi,"
];

export const SIGNOFF: string[] = [
    "Proud Brookline resident",
    "Brookline",
    "Brookline resident",
    "Concerned voter",
    "Concerned Brookline voter",
    "Concerned Brookline resident",
    "Griggs park user",
];

// Email body variations - just the middle paragraphs (greeting/signature added dynamically)
export const EMAIL_VARIATIONS: string[] = [
    `I am writing to express my concern about the planned renovation of Griggs Park. While I support improving our community spaces, I urge you to select a contractor who will keep portions of the park open during construction.

Griggs Park is a vital community resource that residents depend on daily. A complete closure would significantly impact families, children, dog owners, and all who rely on this green space.

I respectfully request that the Town of Brookline prioritize contractors who commit to phased construction, closing only one section at a time while keeping the rest accessible.

Thank you for considering the needs of our community.`,

    `I'm reaching out regarding the upcoming Griggs Park renovation project. Although I'm glad to see investment in our public spaces, I want to advocate for choosing a contractor willing to maintain partial access throughout the construction process.

Many residents use Griggs Park on a regular basis—whether for exercise, children's play, walking dogs, or simply enjoying outdoor space. Shutting down the entire park for the duration of the project would leave a real gap in our neighborhood.

I'd encourage the Town of Brookline to favor bids from contractors who propose a phased approach, working on one area at a time so that at least part of the park remains available to the public.

Thank you for taking community input into account.`,

    `I wanted to share my thoughts on the Griggs Park renovation plans. While I'm glad to see investment in our public spaces, I hope the town will choose a contractor committed to maintaining partial access during construction.

Griggs Park serves as a daily gathering place for many Brookline residents—from parents with kids to dog walkers to those simply seeking a bit of nature. Closing it entirely would leave a real gap in our neighborhood.

Please consider making phased construction a requirement, so that only portions of the park are closed at any given time.

Thank you for your attention to this matter.`,

    `I have one request regarding the Griggs Park renovation: please don't close the whole park at once.

Every day, this space serves families with young children, neighbors walking their dogs, and people looking for a quiet spot outdoors. Shutting it down entirely, especially for an extended period, would leave a hole in the neighborhood.

If the town selects a contractor who can work in phases, we get the improvements without losing access. That seems like a reasonable ask.

Thanks for hearing me out.`,

    `Quick question about the Griggs Park renovation: is a full park closure actually necessary?

Many contractors are capable of phased work—closing one section at a time while leaving the rest open. Given how many residents depend on Griggs Park for daily recreation, this approach seems worth requiring.

I hope we can get the renovation done without completely losing access to the park in the meantime.`,

    `Three points on the Griggs Park renovation:

1. The park is important. Families, dog owners, and many other residents use it every single day.

2. A full closure would be disruptive. Not everyone has easy access to alternative green space.

3. Phased construction is the solution. Work on one section at a time; keep the rest open.

I'd encourage the town to make this a factor in selecting a contractor.

Thank you for your time.`,

    `I'll keep this brief: as you plan the Griggs Park renovation, please require the contractor to keep portions of the park accessible throughout construction.

This park is a daily resource for families, dog owners, and residents across the neighborhood. A phased approach protects that access while still getting the work done.`,

    `What happens to Griggs Park during construction matters—not just what it looks like after.

Residents use this park every day. Kids, dogs, people who just need some green space. If the whole thing closes at once, that daily routine disappears for however long the project takes.

Phased construction solves this. One section closed, the rest open. It's a reasonable expectation for any contractor the town selects.`,

    `Before finalizing plans for the Griggs Park renovation, I hope you'll consider one question: does the entire park need to close?

For the many residents who use Griggs Park daily—parents with children, dog owners, people seeking outdoor space—a full closure would be a significant disruption. Phased construction offers an alternative that balances improvement with access.

I'd encourage the town to seek out contractors who can commit to this approach.`,

    `I'm writing to ask that the Griggs Park renovation be conducted in phases, with portions of the park remaining open throughout construction.

This space sees daily use from families, dog owners, and residents across the neighborhood. A complete closure would disrupt routines and remove access to green space that many people depend on.

Selecting a contractor who can stage the work thoughtfully would make a meaningful difference.`,

    `Griggs Park is a daily destination for families, pet owners, and residents throughout Brookline. During the upcoming renovation, I hope the town will ensure that at least part of it remains accessible.

A contractor who can work in phases—closing one section at a time—would allow necessary improvements without eliminating access entirely.

I'd encourage you to make this a factor in your selection process.`,

    `The Griggs Park renovation doesn't have to mean losing the park entirely.

Phased construction—one section at a time—would let the work happen while keeping portions open for the families, dog owners, and residents who rely on this space every day.

I'm asking the town to require this from whichever contractor is selected.`
];

// Helper to pick random item from array
function randomFrom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Get a random email subject
export function getEmailSubject(): string {
    return randomFrom(EMAIL_SUBJECTS);
}

// Construct a full email by combining random greeting, body, signature, and signoff
export function getEmailBody(): string {
    const greeting = randomFrom(GREETINGS);
    const body = randomFrom(EMAIL_VARIATIONS);
    const signature = randomFrom(EMAIL_SIGNATURES);
    const signoff = randomFrom(SIGNOFF);

    return `${greeting}

${body}

${signature}
[Your Name]
${signoff}`;
}

// ============================================
// GOOGLE FORMS CONFIGURATION
// ============================================

// The Google Form response URL
export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfCoGDiWqB7ut-L0Tg9ALZPdOVHHOwUp_t9uZ5ZSzuyKKdl_Q/formResponse";

// Field entry IDs from the Google Form
export const FORM_FIELD_NAME = "entry.1719420363";
export const FORM_FIELD_EMAIL = "entry.2062294662";

// ============================================
// SIGNATURE COUNT API
// ============================================

// Google Apps Script web app URL (returns {count: number})
// Deploy your Apps Script and paste the URL here
export const SIGNATURE_COUNT_API_URL = "https://script.google.com/macros/s/AKfycbzcESnuALoaUEBaIsRGP-bSApBUc5j5nTu0Pm-I86TBGgTAXoTAJSYjRIgc8kVie__r/exec";

// Minimum signatures to display the count (hide if below this)
export const MIN_SIGNATURES_TO_DISPLAY = 10;

// Baseline signature count to show before API fetch completes
export const BASELINE_SIGNATURE_COUNT = 79;

// Start date for "in the last X days" messaging (Dec 14, 2025 at 6:32 PM)
export const SIGNATURE_START_DATE = new Date('2025-12-14T18:32:00');

// Number of days after start date to show "in the last X days" text
export const DAYS_TO_SHOW_RECENCY = 7;
