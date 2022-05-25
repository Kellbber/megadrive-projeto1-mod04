import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateGameDto {
  @ApiProperty({ description: 'nome do game', example: 'Yu-gi-Oh' })
  @IsString()
  title: string;
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'ano do jogo',
    example: 1996,
  })
  year: number;
  @ApiProperty({
    description: 'descrição do game',
    example: 'Jogo desenvolvido por N e Y',
  })
  description: string;
  @ApiProperty({ description: 'nota do game (0 até 5)', example: 5 })
  @IsNumber()
  @IsPositive()
  imdbScore: number;
  @ApiProperty({
    description: 'link imagem do jogo',
    example: 'www.capadojogo.com.br',
  })
  @IsString()
  coverImageUrl: string;
  @IsString()
  @ApiProperty({
    description: 'link trailer do jogo',
    example: 'www.youtube.com.br/trailerjogo',
  })
  @IsString()
  trailerYoutubeUrl: string;
  @ApiProperty({
    description: 'link gameplay do jogo',
    example: 'www.youtube.com.br/jogando',
  })
  @IsString()
  gameplayYoutubeUrl: string;
}
