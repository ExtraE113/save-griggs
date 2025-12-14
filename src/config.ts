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
export const EMAIL_SUBJECT = "Please Keep Griggs Park Partially Open During Renovation";

// Email body - use \n for line breaks
export const EMAIL_BODY = `Dear Town Officials,

I am writing to express my concern about the planned renovation of Griggs Park. While I support improving our community spaces, I urge you to select a contractor who will keep portions of the park open during construction.

Griggs Park is a vital community resource that residents depend on daily. A complete closure would significantly impact families, children, dog owners, and all who rely on this green space.

I respectfully request that the Town of Brookline prioritize contractors who commit to phased construction, closing only one section at a time while keeping the rest accessible.

Thank you for considering the needs of our community.

Sincerely,
[Your Name]
Proud Brookline resident`;

// ============================================
// GOOGLE FORMS CONFIGURATION
// ============================================

// The Google Form response URL
export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfCoGDiWqB7ut-L0Tg9ALZPdOVHHOwUp_t9uZ5ZSzuyKKdl_Q/formResponse";

// Field entry IDs from the Google Form
export const FORM_FIELD_NAME = "entry.1719420363";
export const FORM_FIELD_EMAIL = "entry.2062294662";
