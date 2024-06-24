import { SortOrder } from "../../util/SortOrder";

export type ContactFormSubmissionOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  name?: SortOrder;
  submittedAt?: SortOrder;
  updatedAt?: SortOrder;
};
