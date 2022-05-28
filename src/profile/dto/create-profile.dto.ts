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
    description: 'nome do perfil',
    example: 'Kellbber',
  })
  @IsString()
  imageUrl: string;
  @IsString()
  @ApiProperty({
    description: 'id do usuário',
    example: '4a00b7c6-525f-4645-99e7-1b9b59e0d602',
  })
  userId: string;

  @ApiProperty({
    description: 'id do game',
    example: '27b8e610-04a7-4d32-9120-72909d3c91ee',
  })
  gameId?: string;
}
