import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContactFormSubmissionModuleBase } from "./base/contactFormSubmission.module.base";
import { ContactFormSubmissionService } from "./contactFormSubmission.service";
import { ContactFormSubmissionController } from "./contactFormSubmission.controller";
import { ContactFormSubmissionResolver } from "./contactFormSubmission.resolver";

@Module({
  imports: [ContactFormSubmissionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContactFormSubmissionController],
  providers: [ContactFormSubmissionService, ContactFormSubmissionResolver],
  exports: [ContactFormSubmissionService],
})
export class ContactFormSubmissionModule {}
