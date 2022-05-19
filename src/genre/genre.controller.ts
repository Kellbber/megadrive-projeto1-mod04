import { Controller, Get } from "@nestjs/common";

@Controller('genres')
export class GenreController {

  @Get()
  findAll(){
    return `Buscar todos os gêneros`
  }

}
