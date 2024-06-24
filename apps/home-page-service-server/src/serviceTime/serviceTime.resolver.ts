import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ServiceTimeResolverBase } from "./base/serviceTime.resolver.base";
import { ServiceTime } from "./base/ServiceTime";
import { ServiceTimeService } from "./serviceTime.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ServiceTime)
export class ServiceTimeResolver extends ServiceTimeResolverBase {
  constructor(
    protected readonly service: ServiceTimeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
