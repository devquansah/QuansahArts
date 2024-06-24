import { ContactFormSubmissionWhereInput } from "./ContactFormSubmissionWhereInput";
import { ContactFormSubmissionOrderByInput } from "./ContactFormSubmissionOrderByInput";

export type ContactFormSubmissionFindManyArgs = {
  where?: ContactFormSubmissionWhereInput;
  orderBy?: Array<ContactFormSubmissionOrderByInput>;
  skip?: number;
  take?: number;
};
