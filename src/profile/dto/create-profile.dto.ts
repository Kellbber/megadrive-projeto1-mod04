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
    example: '4e977676-1e50-4396-978a-e9d5919b39b5',
  })
  gameId?: string;
}
