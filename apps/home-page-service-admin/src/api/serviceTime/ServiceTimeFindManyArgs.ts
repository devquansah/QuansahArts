import { ServiceTimeWhereInput } from "./ServiceTimeWhereInput";
import { ServiceTimeOrderByInput } from "./ServiceTimeOrderByInput";

export type ServiceTimeFindManyArgs = {
  where?: ServiceTimeWhereInput;
  orderBy?: Array<ServiceTimeOrderByInput>;
  skip?: number;
  take?: number;
};
