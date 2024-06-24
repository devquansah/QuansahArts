import { InputJsonValue } from "../../types";

export type SermonUpdateInput = {
  date?: Date | null;
  description?: string | null;
  mediaUrl?: InputJsonValue;
  title?: string | null;
};
