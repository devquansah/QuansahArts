import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WelcomeMessageWhereInput = {
  id?: StringFilter;
  messageText?: StringNullableFilter;
};
