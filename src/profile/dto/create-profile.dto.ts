import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'nome do perfil',
    example: 'Kellbber',
  })
  title: string;
  @IsString()
  @ApiProperty({
    description: 'imagem do perfil',
    example: 'https://avatars.githubusercontent.com/u/96138394',
  })
  @IsString()
  imageUrl: string;


  @ApiProperty({
    description: 'id do game (opcional)',
    example: '1d565ff0-d675-401a-98ae-52fbb2268f10',
  })
  gameId?: string;

  @ApiProperty({
    description: 'id do game para adicionar ou remover dos favoritos (opcional)',
    example: '1d565ff0-d675-401a-98ae-52fbb2268f10',
  })
  favoriteGameId?: string;


}
