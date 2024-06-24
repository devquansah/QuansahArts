import { Injectable } from "@nestjs/common";
import { StripePaymentInput } from "../paymentModule/StripePaymentInput";

@Injectable()
export class PaymentModuleService {
  constructor() {}
  async CreateStripePayment(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ProcessStripePayment(args: StripePaymentInput): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
