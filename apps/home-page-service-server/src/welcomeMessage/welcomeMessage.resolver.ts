import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WelcomeMessageResolverBase } from "./base/welcomeMessage.resolver.base";
import { WelcomeMessage } from "./base/WelcomeMessage";
import { WelcomeMessageService } from "./welcomeMessage.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WelcomeMessage)
export class WelcomeMessageResolver extends WelcomeMessageResolverBase {
  constructor(
    protected readonly service: WelcomeMessageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
