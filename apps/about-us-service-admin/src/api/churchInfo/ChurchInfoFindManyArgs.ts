import { ChurchInfoWhereInput } from "./ChurchInfoWhereInput";
import { ChurchInfoOrderByInput } from "./ChurchInfoOrderByInput";

export type ChurchInfoFindManyArgs = {
  where?: ChurchInfoWhereInput;
  orderBy?: Array<ChurchInfoOrderByInput>;
  skip?: number;
  take?: number;
};
