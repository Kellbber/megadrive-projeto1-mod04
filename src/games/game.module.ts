import { Module } from "@nestjs/common";
import { GameController } from "./game.controler";

@Module({
  controllers: [GameController],
  providers: [],
})
export class GameModule{}
