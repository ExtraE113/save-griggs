import {
  RECIPIENT_EMAILS,
  BCC_EMAIL,
  getEmailSubject,
  getEmailBody,
  GOOGLE_FORM_URL,
  FORM_FIELD_NAME,
  FORM_FIELD_EMAIL,
  SIGNATURE_COUNT_API_URL,
  MIN_SIGNATURES_TO_DISPLAY,
} from './config.ts';

// ============================================
// Google Analytics
// ============================================
declare function gtag(command: 'event', eventName: string, params?: Record<string, unknown>): void;

function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  try {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
    }
  } catch (error) {
    // Analytics is non-essential, don't break the app
    console.error('Analytics error:', error);
  }
}

// ============================================
// Signature Count
// ============================================
async function fetchSignatureCount(): Promise<void> {
  if (!SIGNATURE_COUNT_API_URL) {
    return;
  }

  try {
    const response = await fetch(SIGNATURE_COUNT_API_URL);
    const data = await response.json() as { count: number };
    const count = data.count;

    if (count >= MIN_SIGNATURES_TO_DISPLAY) {
      displaySignatureCount(count);
    }
  } catch (error) {
    // Non-essential, don't break the app
    console.error('Error fetching signature count:', error);
  }
}

function displaySignatureCount(count: number): void {
  const countSection = document.getElementById('signature-count');
  const countElement = document.getElementById('count');

  if (countSection && countElement) {
    countElement.textContent = count.toString();
    countSection.style.display = 'block';
  }
}

// ============================================
// Types
// ============================================
type FlowType = 'sign-only' | 'sign-and-email';
type StepId = 'step-name' | 'step-email' | 'step-thanks' | 'step-send-email' | 'step-final-thanks';

// ============================================
// State
// ============================================
let currentFlow: FlowType = 'sign-only';
let userName = '';

// ============================================
// DOM Elements
// ============================================
function getElement<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Element with id "${id}" not found`);
  }
  return element as T;
}

// ============================================
// Google Forms Submission
// ============================================
async function submitToGoogleForms(name: string, email?: string): Promise<void> {
  if (!GOOGLE_FORM_URL) {
    console.warn('Google Form URL not configured. Skipping submission.');
    return;
  }

  const formData = new FormData();
  formData.append(FORM_FIELD_NAME, name);
  if (email) {
    formData.append(FORM_FIELD_EMAIL, email);
  }

  try {
    // Google Forms requires 'no-cors' mode for cross-origin requests
    // This means we won't get a response body, but the submission will work
    await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    });
    console.log('Form submitted successfully');
  } catch (error) {
    // Log but don't throw - we don't want to break the user experience
    console.error('Error submitting form:', error);
  }
}

// ============================================
// Email Generation
// ============================================
function generateMailtoLink(): string {
  const uniqueEmails = [...new Set(RECIPIENT_EMAILS)];
  const to = uniqueEmails.join(',');
  const subject = encodeURIComponent(getEmailSubject());
  const bodyWithName = getEmailBody().replace('[Your Name]', userName);
  const body = encodeURIComponent(bodyWithName);
  const bcc = encodeURIComponent(BCC_EMAIL);

  return `mailto:${to}?subject=${subject}&body=${body}&bcc=${bcc}`;
}

// ============================================
// Modal Management
// ============================================
function showModal(): void {
  const overlay = getElement<HTMLDivElement>('modal-overlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function hideModal(): void {
  const overlay = getElement<HTMLDivElement>('modal-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';

  // Reset to first step after animation
  setTimeout(() => {
    resetModalSteps();
  }, 300);
}

function showStep(stepId: StepId): void {
  const steps = document.querySelectorAll('.modal-step');
  steps.forEach((step) => {
    step.classList.add('hidden');
  });

  const targetStep = getElement<HTMLDivElement>(stepId);
  targetStep.classList.remove('hidden');
}

function resetModalSteps(): void {
  showStep('step-name');

  // Clear form inputs
  const nameInput = getElement<HTMLInputElement>('input-name');
  const emailInput = getElement<HTMLInputElement>('input-email');
  nameInput.value = '';
  emailInput.value = '';

  // Reset state
  userName = '';
}

// ============================================
// Flow Handlers
// ============================================
function handleNameSubmit(event: Event): void {
  event.preventDefault();

  const nameInput = getElement<HTMLInputElement>('input-name');
  userName = nameInput.value.trim();

  if (!userName) {
    nameInput.focus();
    return;
  }

  // Submit name immediately (don't wait for email step)
  submitToGoogleForms(userName);
  trackEvent('name_submitted', { flow: currentFlow });

  // Move to email step
  showStep('step-email');
}

function handleEmailSubmit(event: Event): void {
  event.preventDefault();

  const emailInput = getElement<HTMLInputElement>('input-email');
  const email = emailInput.value.trim();

  if (email) {
    // Submit with email (this creates a second entry, which is fine)
    // Or we could update the existing entry if Google Forms supported it
    submitToGoogleForms(userName, email);
    trackEvent('email_submitted', { flow: currentFlow });
  }

  // Proceed based on flow type
  if (currentFlow === 'sign-and-email') {
    showStep('step-send-email');
  } else {
    showStep('step-thanks');
  }
}

function handleSkipEmail(): void {
  if (currentFlow === 'sign-and-email') {
    showStep('step-send-email');
  } else {
    showStep('step-thanks');
  }
}

function handleOpenEmail(): void {
  trackEvent('open_email_clicked');
  const mailtoLink = generateMailtoLink();
  window.location.href = mailtoLink;

  // Show final thanks after a brief delay
  setTimeout(() => {
    showStep('step-final-thanks');
  }, 500);
}

// ============================================
// Event Listeners Setup
// ============================================
function setupEventListeners(): void {
  // Main action buttons
  const btnSign = getElement<HTMLButtonElement>('btn-sign');
  const btnSignEmail = getElement<HTMLButtonElement>('btn-sign-email');

  btnSign.addEventListener('click', () => {
    trackEvent('button_click', { button_type: 'sign_only' });
    currentFlow = 'sign-only';
    showModal();
  });

  btnSignEmail.addEventListener('click', () => {
    trackEvent('button_click', { button_type: 'sign_and_email' });
    currentFlow = 'sign-and-email';
    showModal();
  });

  // Modal close buttons
  const modalClose1 = getElement<HTMLButtonElement>('modal-close');
  const modalClose2 = getElement<HTMLButtonElement>('modal-close-2');
  const modalClose3 = getElement<HTMLButtonElement>('modal-close-3');

  modalClose1.addEventListener('click', hideModal);
  modalClose2.addEventListener('click', hideModal);
  modalClose3.addEventListener('click', hideModal);

  // Close on Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      hideModal();
    }
  });

  // Form submissions
  const formName = getElement<HTMLFormElement>('form-name');
  const formEmail = getElement<HTMLFormElement>('form-email');

  formName.addEventListener('submit', handleNameSubmit);
  formEmail.addEventListener('submit', handleEmailSubmit);

  // Skip/Done buttons
  const btnSkipEmail = getElement<HTMLButtonElement>('btn-skip-email');
  const btnDone = getElement<HTMLButtonElement>('btn-done');
  const btnOpenEmail = getElement<HTMLButtonElement>('btn-open-email');
  const btnSkipSend = getElement<HTMLButtonElement>('btn-skip-send');
  const btnFinalDone = getElement<HTMLButtonElement>('btn-final-done');
  const btnSendEmailCta = getElement<HTMLButtonElement>('btn-send-email-cta');

  btnSkipEmail.addEventListener('click', handleSkipEmail);
  btnDone.addEventListener('click', hideModal);
  btnOpenEmail.addEventListener('click', handleOpenEmail);
  btnSkipSend.addEventListener('click', () => showStep('step-final-thanks'));
  btnFinalDone.addEventListener('click', hideModal);
  btnSendEmailCta.addEventListener('click', handleOpenEmail);
}

// ============================================
// Initialize
// ============================================
function init(): void {
  setupEventListeners();
  fetchSignatureCount();
  console.log('SaveGriggs app initialized');

  // Warn if Google Forms is not configured
  if (!GOOGLE_FORM_URL) {
    console.warn(
      'Google Forms not configured. Edit src/config.ts to enable form submissions.'
    );
  }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
