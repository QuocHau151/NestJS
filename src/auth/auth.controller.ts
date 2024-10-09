import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  async signup(@Body() data: CreateUserDto) {
    return this.authService.createUser(data);
  }
  @Get('signin')
  async signIn(@Body() data: CreateUserDto) {
    return this.authService.findUserByEmail(data.email);
  }
  @Get('users')
  async getAllUser() {
    return this.authService.getAllUser();
  }
}
