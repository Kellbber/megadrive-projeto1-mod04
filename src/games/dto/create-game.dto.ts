import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString} from 'class-validator';

export class CreateGameDto {
  @ApiProperty({ description: 'nome do game', example: 'Yu-gi-Oh' })
  @IsString()
  name: string;
  @ApiProperty({ description: 'preço do game', example: '15' })
  @IsNumber()
  price: number;
  @IsString()
  @ApiProperty({
    description: 'descrição do game',
    example: 'Jogo desenvolvido por N e Y',
  })
  description: string;
}
