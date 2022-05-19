import { Controller, Get, Post } from '@nestjs/common';

@Controller('genres')
export class GenreController {
  @Get()
  findAll() {
    return `Buscar todos os gêneros`;
  }

  @Post()
  create() {
    return `Criar um gênero`;
  }
}
