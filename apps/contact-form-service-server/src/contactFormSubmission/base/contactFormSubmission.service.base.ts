/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ContactFormSubmission as PrismaContactFormSubmission,
} from "@prisma/client";

export class ContactFormSubmissionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ContactFormSubmissionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.contactFormSubmission.count(args);
  }

  async contactFormSubmissions(
    args: Prisma.ContactFormSubmissionFindManyArgs
  ): Promise<PrismaContactFormSubmission[]> {
    return this.prisma.contactFormSubmission.findMany(args);
  }
  async contactFormSubmission(
    args: Prisma.ContactFormSubmissionFindUniqueArgs
  ): Promise<PrismaContactFormSubmission | null> {
    return this.prisma.contactFormSubmission.findUnique(args);
  }
  async createContactFormSubmission(
    args: Prisma.ContactFormSubmissionCreateArgs
  ): Promise<PrismaContactFormSubmission> {
    return this.prisma.contactFormSubmission.create(args);
  }
  async updateContactFormSubmission(
    args: Prisma.ContactFormSubmissionUpdateArgs
  ): Promise<PrismaContactFormSubmission> {
    return this.prisma.contactFormSubmission.update(args);
  }
  async deleteContactFormSubmission(
    args: Prisma.ContactFormSubmissionDeleteArgs
  ): Promise<PrismaContactFormSubmission> {
    return this.prisma.contactFormSubmission.delete(args);
  }
}
