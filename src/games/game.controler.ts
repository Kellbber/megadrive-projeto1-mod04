import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateGameDto } from "./dto/create-game.dto";
import { UpdateGameDto } from "./dto/update-game.dto";
import { Game } from "./entities/game.entity";
import { GameService } from "./game.service";
@ApiTags('Games')
@Controller('games')
export class GameController{
  constructor(private readonly gameService: GameService){}
  @Get()
  @ApiOperation({
    summary: 'Listar todos os games'
  })

  findAll(): Promise<Game[]>{
    return this.gameService.findAll();
  }
  @Get(':id')
  @ApiOperation({
    summary: 'Achar um game por ID'
  })
  findOne(@Param('id') id:string): Promise<Game>{
    return this.gameService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um game'
  })
  create(@Body()dto: CreateGameDto): Promise<Game>{
    return this.gameService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar um game por ID'
  })
  update(@Param('id') id:string, @Body()dto: UpdateGameDto): Promise<Game>{
    return this.gameService.update(id, dto)

  }
}
