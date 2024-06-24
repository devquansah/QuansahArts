import { SortOrder } from "../../util/SortOrder";

export type WelcomeMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  messageText?: SortOrder;
  updatedAt?: SortOrder;
};
