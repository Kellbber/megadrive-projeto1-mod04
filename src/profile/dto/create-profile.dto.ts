import { ApiProperty } from "@nestjs/swagger";


import { IsString } from "class-validator";


export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: "nome do perfil",
    example: "Kellbber"
  })
  title: string;
  @IsString()
  @ApiProperty({
    description: "nome do perfil",
    example: "Kellbber"
  })
  @IsString()
  imageUrl: string;
  @IsString()
  userId: string;
  @IsString()
  gameId: string;

}
