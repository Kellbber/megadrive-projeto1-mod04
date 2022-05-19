import { ApiProperty } from '@nestjs/swagger';

export class CreateGameDto {
  @ApiProperty({ description: 'nome do game', example: 'Yu-gi-Oh' })
  name: string;
  @ApiProperty({ description: 'preço do game', example: '15' })
  price: number;
  @ApiProperty({
    description: 'descrição do game',
    example: 'Jogo desenvolvido por N e Y',
  })
  description: string;
}
