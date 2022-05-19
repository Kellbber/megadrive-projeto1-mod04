import { ApiProperty } from '@nestjs/swagger';

export class CreateGenreDto {
  @ApiProperty({ description: ' gênero do game', example: 'Ação' })
  
  genre: string;
}
