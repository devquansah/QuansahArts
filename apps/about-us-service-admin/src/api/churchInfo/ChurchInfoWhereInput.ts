import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ChurchInfoWhereInput = {
  description?: StringNullableFilter;
  foundedDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
