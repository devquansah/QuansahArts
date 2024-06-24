import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChurchInfoService } from "./churchInfo.service";
import { ChurchInfoControllerBase } from "./base/churchInfo.controller.base";

@swagger.ApiTags("churchInfos")
@common.Controller("churchInfos")
export class ChurchInfoController extends ChurchInfoControllerBase {
  constructor(
    protected readonly service: ChurchInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
