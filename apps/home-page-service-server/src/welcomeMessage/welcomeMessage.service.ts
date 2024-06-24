import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WelcomeMessageServiceBase } from "./base/welcomeMessage.service.base";

@Injectable()
export class WelcomeMessageService extends WelcomeMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
