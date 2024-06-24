import { ContactFormSubmission as TContactFormSubmission } from "../api/contactFormSubmission/ContactFormSubmission";

export const CONTACTFORMSUBMISSION_TITLE_FIELD = "name";

export const ContactFormSubmissionTitle = (
  record: TContactFormSubmission
): string => {
  return record.name?.toString() || String(record.id);
};
