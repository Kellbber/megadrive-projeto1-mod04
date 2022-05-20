import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGenreDto} from './dto/create-genre.dto';
import { GenreService } from './genre.service';
@ApiTags('Genres')
@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService){}

  @Get()
  findAll() {
    return this.genreService.findAll();
  }

  @Post()
  create(@Body()dto: CreateGenreDto) {
    return this.genreService.create(dto);
  }
}
