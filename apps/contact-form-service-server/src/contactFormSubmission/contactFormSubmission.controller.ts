import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContactFormSubmissionService } from "./contactFormSubmission.service";
import { ContactFormSubmissionControllerBase } from "./base/contactFormSubmission.controller.base";

@swagger.ApiTags("contactFormSubmissions")
@common.Controller("contactFormSubmissions")
export class ContactFormSubmissionController extends ContactFormSubmissionControllerBase {
  constructor(
    protected readonly service: ContactFormSubmissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
