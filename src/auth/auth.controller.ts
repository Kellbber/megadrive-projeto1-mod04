import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Realizar login com token de AUTH.'
  })
  login(@Body()loginDto: LoginDto): Promise<LoginResponseDto>{
    return this.authService.login(loginDto)
  }
  @Get()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'retorna usuário autenticado no momento'
  })
  @ApiBearerAuth()
  profile(){
    return {message:'Autenticação bem sucedida'}
  }
}
