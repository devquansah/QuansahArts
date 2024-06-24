import { WelcomeMessage as TWelcomeMessage } from "../api/welcomeMessage/WelcomeMessage";

export const WELCOMEMESSAGE_TITLE_FIELD = "messageText";

export const WelcomeMessageTitle = (record: TWelcomeMessage): string => {
  return record.messageText?.toString() || String(record.id);
};
