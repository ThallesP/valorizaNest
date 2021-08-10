import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import type { Request as RequestType } from 'express';
import { GenericErrorResponse } from 'src/utils/generic-error-response';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserLoggedInResponse } from './responses/user-logged-in.response';
import { UserRegisteredResponse } from './responses/user-registered.response';
import { LocalAuthGuard } from './strategies/localAuthGuard';

@Controller()
@ApiTags('Authentication')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({ type: LoginUserDto })
  @ApiUnauthorizedResponse({
    description: 'The email or the password is incorrect.',
    type: GenericErrorResponse,
  })
  @ApiOkResponse({
    description: 'Successfully logged in',
    type: UserLoggedInResponse,
  })
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() request: RequestType) {
    return this.authService.login(request.user);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOkResponse({
    description: 'Successfully registered User',
    type: UserRegisteredResponse,
  })
  @ApiBadRequestResponse({
    description: 'User already exists',
    type: GenericErrorResponse,
  })
  @Post('/register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.registerUser(registerUserDto);
  }
}
