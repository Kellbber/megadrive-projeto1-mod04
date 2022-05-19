import { Injectable } from "@nestjs/common";

@Injectable()
export class GenreService {

  findAll() {
    return `Buscar todos os GAMES`
  }
  create() {
    return `Criar um GAME`;
  }

}
