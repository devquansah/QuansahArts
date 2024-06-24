import { InputJsonValue } from "../../types";

export type SermonCreateInput = {
  date?: Date | null;
  description?: string | null;
  mediaUrl?: InputJsonValue;
  title?: string | null;
};
