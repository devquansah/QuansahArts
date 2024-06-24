import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ServiceTimeModuleBase } from "./base/serviceTime.module.base";
import { ServiceTimeService } from "./serviceTime.service";
import { ServiceTimeController } from "./serviceTime.controller";
import { ServiceTimeResolver } from "./serviceTime.resolver";

@Module({
  imports: [ServiceTimeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ServiceTimeController],
  providers: [ServiceTimeService, ServiceTimeResolver],
  exports: [ServiceTimeService],
})
export class ServiceTimeModule {}
