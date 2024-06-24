import { WelcomeMessageWhereInput } from "./WelcomeMessageWhereInput";
import { WelcomeMessageOrderByInput } from "./WelcomeMessageOrderByInput";

export type WelcomeMessageFindManyArgs = {
  where?: WelcomeMessageWhereInput;
  orderBy?: Array<WelcomeMessageOrderByInput>;
  skip?: number;
  take?: number;
};
