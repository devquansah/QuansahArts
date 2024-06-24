import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ContactFormSubmissionResolverBase } from "./base/contactFormSubmission.resolver.base";
import { ContactFormSubmission } from "./base/ContactFormSubmission";
import { ContactFormSubmissionService } from "./contactFormSubmission.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ContactFormSubmission)
export class ContactFormSubmissionResolver extends ContactFormSubmissionResolverBase {
  constructor(
    protected readonly service: ContactFormSubmissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
