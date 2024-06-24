import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChurchInfoServiceBase } from "./base/churchInfo.service.base";

@Injectable()
export class ChurchInfoService extends ChurchInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
