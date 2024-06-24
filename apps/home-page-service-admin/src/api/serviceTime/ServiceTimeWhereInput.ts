import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ServiceTimeWhereInput = {
  day?: "Option1";
  id?: StringFilter;
  time?: DateTimeNullableFilter;
};
