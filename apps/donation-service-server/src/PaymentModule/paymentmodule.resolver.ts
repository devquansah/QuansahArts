import * as graphql from "@nestjs/graphql";
import { StripePaymentInput } from "../paymentModule/StripePaymentInput";
import { PaymentModuleService } from "./paymentmodule.service";

export class PaymentModuleResolver {
  constructor(protected readonly service: PaymentModuleService) {}

  @graphql.Query(() => String)
  async CreateStripePayment(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateStripePayment(args);
  }

  @graphql.Mutation(() => Boolean)
  async ProcessStripePayment(
    @graphql.Args()
    args: StripePaymentInput
  ): Promise<boolean> {
    return this.service.ProcessStripePayment(args);
  }
}
