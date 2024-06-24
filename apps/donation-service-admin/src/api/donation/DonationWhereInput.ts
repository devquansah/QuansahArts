import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DonationWhereInput = {
  amount?: FloatNullableFilter;
  donationDate?: DateTimeNullableFilter;
  donorEmail?: StringNullableFilter;
  donorName?: StringNullableFilter;
  id?: StringFilter;
};
