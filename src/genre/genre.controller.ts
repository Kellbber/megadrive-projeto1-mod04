import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateGenreDto} from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';
import { GenreService } from './genre.service';
@ApiTags('Genres')
@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService){}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os gêneros'
  })
  findAll(): Promise<Genre[]> {
    return this.genreService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Achar um gênero por ID'
  })
  findOne(@Param('id') id:string): Promise<Genre>{
    return this.genreService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um gênero'
  })
  create(@Body()dto: CreateGenreDto): Promise<Genre> {
    return this.genreService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar um gênero por ID'
  })
  update(@Param('id') id:string, @Body()dto: UpdateGenreDto): Promise<Genre>{
    return this.genreService.update(id, dto)

  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um gênero por ID'
  })
  delete(@Param('id') id: string){
    this.genreService.delete(id);
  }
}
