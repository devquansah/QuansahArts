import { SortOrder } from "../../util/SortOrder";

export type DonationOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  donationDate?: SortOrder;
  donorEmail?: SortOrder;
  donorName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
