import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentModuleService } from "./paymentmodule.service";
import { StripePaymentInput } from "../paymentModule/StripePaymentInput";

@swagger.ApiTags("paymentModules")
@common.Controller("paymentModules")
export class PaymentModuleController {
  constructor(protected readonly service: PaymentModuleService) {}

  @common.Get("/:id/create-stripe-payment")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateStripePayment(
    @common.Body()
    body: StripePaymentInput
  ): Promise<string> {
        return this.service.CreateStripePayment(body);
      }

  @common.Post("/process-stripe-payment")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessStripePayment(
    @common.Body()
    body: StripePaymentInput
  ): Promise<boolean> {
        return this.service.ProcessStripePayment(body);
      }
}
