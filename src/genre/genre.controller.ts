import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateGenreDto} from './dto/create-genre.dto';
import { GenreService } from './genre.service';

@Controller('genres')
export class GenreController {
  constructor(private genreService: GenreService){}

  @Get()
  findAll() {
    return this.genreService.findAll();
  }

  @Post()
  create(@Body()createGenreDto: CreateGenreDto) {
    return this.genreService.create(createGenreDto);
  }
}