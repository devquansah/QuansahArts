import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactFormSubmissionServiceBase } from "./base/contactFormSubmission.service.base";

@Injectable()
export class ContactFormSubmissionService extends ContactFormSubmissionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
