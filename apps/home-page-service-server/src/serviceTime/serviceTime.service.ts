import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceTimeServiceBase } from "./base/serviceTime.service.base";

@Injectable()
export class ServiceTimeService extends ServiceTimeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
