import { Controller, Get, Post } from "@nestjs/common";

@Controller('games')
export class GameController{
  @Get()
  findAll(){
    return 'Buscar todos os games'
  }

  @Post()
  create(){
    return `criar um game`;
  }
}
