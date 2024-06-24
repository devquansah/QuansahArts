import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SermonService } from "./sermon.service";
import { SermonControllerBase } from "./base/sermon.controller.base";

@swagger.ApiTags("sermons")
@common.Controller("sermons")
export class SermonController extends SermonControllerBase {
  constructor(
    protected readonly service: SermonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
