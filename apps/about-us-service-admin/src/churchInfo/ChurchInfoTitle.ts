import { ChurchInfo as TChurchInfo } from "../api/churchInfo/ChurchInfo";

export const CHURCHINFO_TITLE_FIELD = "name";

export const ChurchInfoTitle = (record: TChurchInfo): string => {
  return record.name?.toString() || String(record.id);
};
