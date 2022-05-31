import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {

  constructor(private readonly prisma: PrismaService) {}
  
 async create(createGameDto: CreateGameDto) {
    const data: Prisma.GameCreateInput = {
      title: createGameDto.title,
      description: createGameDto.description,
      coverImageUrl: createGameDto.coverImageUrl,
      year: createGameDto.year,
      imdbScore: createGameDto.imdbScore,
      trailerYoutubeUrl: createGameDto.trailerYoutubeUrl,
      gameplayYoutubeUrl: createGameDto.gameplayYoutubeUrl,
      genres: {
        connect:{
          name: createGameDto.genreName,
        }
      }
      }
    return await this.prisma.game.create({
      data, include:{
        genres: true
      }
    }).catch(this.handleError);
  }

  findAll() {
    return this.prisma.game.findMany({include:{
      genres:true
    }

    });
  }
  async findById(id: string){
    const record = await this.prisma.game.findUnique({
      where: {
        id: id
      },
      include:{
        genres: true
      }
    });
    if(!record){
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`)
    }
    return record;
  }

  async update(id: string, dto: UpdateGameDto) {
   const gameAtual = await this.findById(id);
    const data: Prisma.GameUpdateInput ={
      title: dto.title,
      description: dto.description,
      coverImageUrl: dto.coverImageUrl,
      year: dto.year,
      imdbScore: dto.imdbScore,
      trailerYoutubeUrl: dto.trailerYoutubeUrl,
      gameplayYoutubeUrl: dto.gameplayYoutubeUrl,
      genres: {
        disconnect:{
          name: gameAtual.genres[0].name
        },
        connect:{
          name: dto.genreName,
        }
      }
    }
    return await this.prisma.game.update({
      where: {id},
      data,
      include:{
        genres:true
      }
    }).catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);
   await this.prisma.game.delete({where:{id}})
  }

  handleError(error: Error): undefined{
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length-1]?.trim();

    throw new UnprocessableEntityException(lastErrorLine|| `Algum erro inesperado ocorreu`);
  }
}
