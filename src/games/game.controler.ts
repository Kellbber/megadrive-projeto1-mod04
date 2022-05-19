import { Controller, Get } from "@nestjs/common";

@Controller('games')
export class GameController{
  @Get()
  findAll(){
    return 'Buscar todos os games'
  }
}
