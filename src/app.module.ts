import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { PetModule } from './pet/pet.module';
import { ShelterModule } from "./shelter/shelter.module";
import { HealthCheckModule } from "./health-check/health-check.module";
import { AdoptionRequestModule } from "./adoption-request/adoption-request.module";
import {
  AutoIncrementID,
  AutoIncrementIDOptions,
} from "@typegoose/auto-increment";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema.plugin(AutoIncrementID, {
          field: "id",
          startAt: 1,
        } satisfies AutoIncrementIDOptions),
      },
    ]),
    AuthModule,
    PetModule,
    UserModule,
    ShelterModule,
    HealthCheckModule,
    AdoptionRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
