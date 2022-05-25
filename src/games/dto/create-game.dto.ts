import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateGameDto {
  @ApiProperty({ description: 'titulo do game', example: 'Yu-gi-Oh' })
  @IsString()
  title: string;
  @ApiProperty({
    description: 'link imagem do jogo',
    example: 'www.imagemdojogo.com.br',
  })
  @IsString()
  coverImageUrl: string;
  @IsString()
  @ApiProperty({
    description: 'descrição do game',
    example: 'Jogo desenvolvido por N e Y',
  })
  description: string;
  @ApiProperty({ description: 'ano do jogo', example: 1996 })
  @IsNumber()
  @IsPositive()
  year: number;
  @ApiProperty({ description: 'nota score do jogo (0 até 5)', example: 2 })
  @IsNumber()
  @IsPositive()
  imdbScore: number;
  @IsString()
  @ApiProperty({
    description: 'trailer do jogo',
    example: 'www.youtube.com.br/trailerdojogo',
  })
  trailerYoutubeUrl: string;
  @IsString()
  @ApiProperty({
    description: 'gameplay do jogo',
    example: 'www.youtube.com.br/gameplaydojogo',
  })
  gameplayYoutubeUrl: string;
}
