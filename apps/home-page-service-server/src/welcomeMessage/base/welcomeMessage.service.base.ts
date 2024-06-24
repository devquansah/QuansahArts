/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, WelcomeMessage as PrismaWelcomeMessage } from "@prisma/client";

export class WelcomeMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WelcomeMessageCountArgs, "select">
  ): Promise<number> {
    return this.prisma.welcomeMessage.count(args);
  }

  async welcomeMessages(
    args: Prisma.WelcomeMessageFindManyArgs
  ): Promise<PrismaWelcomeMessage[]> {
    return this.prisma.welcomeMessage.findMany(args);
  }
  async welcomeMessage(
    args: Prisma.WelcomeMessageFindUniqueArgs
  ): Promise<PrismaWelcomeMessage | null> {
    return this.prisma.welcomeMessage.findUnique(args);
  }
  async createWelcomeMessage(
    args: Prisma.WelcomeMessageCreateArgs
  ): Promise<PrismaWelcomeMessage> {
    return this.prisma.welcomeMessage.create(args);
  }
  async updateWelcomeMessage(
    args: Prisma.WelcomeMessageUpdateArgs
  ): Promise<PrismaWelcomeMessage> {
    return this.prisma.welcomeMessage.update(args);
  }
  async deleteWelcomeMessage(
    args: Prisma.WelcomeMessageDeleteArgs
  ): Promise<PrismaWelcomeMessage> {
    return this.prisma.welcomeMessage.delete(args);
  }
}
