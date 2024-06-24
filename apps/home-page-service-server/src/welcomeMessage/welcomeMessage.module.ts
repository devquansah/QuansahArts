import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WelcomeMessageModuleBase } from "./base/welcomeMessage.module.base";
import { WelcomeMessageService } from "./welcomeMessage.service";
import { WelcomeMessageController } from "./welcomeMessage.controller";
import { WelcomeMessageResolver } from "./welcomeMessage.resolver";

@Module({
  imports: [WelcomeMessageModuleBase, forwardRef(() => AuthModule)],
  controllers: [WelcomeMessageController],
  providers: [WelcomeMessageService, WelcomeMessageResolver],
  exports: [WelcomeMessageService],
})
export class WelcomeMessageModule {}
