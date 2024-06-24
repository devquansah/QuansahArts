import { SortOrder } from "../../util/SortOrder";

export type ServiceTimeOrderByInput = {
  createdAt?: SortOrder;
  day?: SortOrder;
  id?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
