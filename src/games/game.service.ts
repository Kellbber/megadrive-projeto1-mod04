import { Injectable } from "@nestjs/common";
import { CreateGameDto } from "./dto/create-game.dto";

@Injectable()
export class GameService {

  findAll() {
    return `Buscar todos os GAMES`;
  }
  create(createGameDto: CreateGameDto) {
    return `criar um game ` + JSON.stringify(createGameDto)
  }
}
