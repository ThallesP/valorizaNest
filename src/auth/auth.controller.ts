import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import type { Request as RequestType } from 'express';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LocalAuthGuard } from './strategies/localAuthGuard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() request: RequestType) {
    return this.authService.login(request.user);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('/register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.registerUser(registerUserDto);
  }
}
