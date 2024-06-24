import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ChurchInfoResolverBase } from "./base/churchInfo.resolver.base";
import { ChurchInfo } from "./base/ChurchInfo";
import { ChurchInfoService } from "./churchInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ChurchInfo)
export class ChurchInfoResolver extends ChurchInfoResolverBase {
  constructor(
    protected readonly service: ChurchInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
