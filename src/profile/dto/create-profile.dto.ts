import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProfileDto {
  id: string;
  @IsString()
  @ApiProperty({
    description: 'nome do perfil',
    example: 'Kellbber'
  })
  name: string;
}
