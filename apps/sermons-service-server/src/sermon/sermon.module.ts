import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SermonModuleBase } from "./base/sermon.module.base";
import { SermonService } from "./sermon.service";
import { SermonController } from "./sermon.controller";
import { SermonResolver } from "./sermon.resolver";

@Module({
  imports: [SermonModuleBase, forwardRef(() => AuthModule)],
  controllers: [SermonController],
  providers: [SermonService, SermonResolver],
  exports: [SermonService],
})
export class SermonModule {}
