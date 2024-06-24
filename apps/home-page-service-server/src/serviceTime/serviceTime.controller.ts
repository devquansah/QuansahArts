import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServiceTimeService } from "./serviceTime.service";
import { ServiceTimeControllerBase } from "./base/serviceTime.controller.base";

@swagger.ApiTags("serviceTimes")
@common.Controller("serviceTimes")
export class ServiceTimeController extends ServiceTimeControllerBase {
  constructor(
    protected readonly service: ServiceTimeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
