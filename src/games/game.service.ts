import { Injectable } from "@nestjs/common";

@Injectable()
export class GameService {

  findAll() {
    return `Buscar todos os GAMES`;
  }
  create() {
    return `criar um game`
  }
}
