import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WelcomeMessageService } from "./welcomeMessage.service";
import { WelcomeMessageControllerBase } from "./base/welcomeMessage.controller.base";

@swagger.ApiTags("welcomeMessages")
@common.Controller("welcomeMessages")
export class WelcomeMessageController extends WelcomeMessageControllerBase {
  constructor(
    protected readonly service: WelcomeMessageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
