import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChurchInfoModuleBase } from "./base/churchInfo.module.base";
import { ChurchInfoService } from "./churchInfo.service";
import { ChurchInfoController } from "./churchInfo.controller";
import { ChurchInfoResolver } from "./churchInfo.resolver";

@Module({
  imports: [ChurchInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChurchInfoController],
  providers: [ChurchInfoService, ChurchInfoResolver],
  exports: [ChurchInfoService],
})
export class ChurchInfoModule {}
