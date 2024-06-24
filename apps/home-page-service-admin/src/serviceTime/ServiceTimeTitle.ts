import { ServiceTime as TServiceTime } from "../api/serviceTime/ServiceTime";

export const SERVICETIME_TITLE_FIELD = "id";

export const ServiceTimeTitle = (record: TServiceTime): string => {
  return record.id?.toString() || String(record.id);
};
