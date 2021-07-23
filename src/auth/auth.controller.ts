import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import type { Request as RequestType } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './strategies/localAuthGuard';

@Controller()
@ApiTags('Authentication')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() request: RequestType) {
    return this.authService.login(request.user);
  }
}
