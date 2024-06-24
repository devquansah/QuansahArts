import { JsonValue } from "type-fest";

export type Sermon = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  mediaUrl: JsonValue;
  title: string | null;
  updatedAt: Date;
};
