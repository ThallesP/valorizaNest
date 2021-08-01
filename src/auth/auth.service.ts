import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersRepositores } from 'src/users/users.repositories';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersRepositories: UsersRepositores,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersRepositories.findOne({
      email,
    });

    if (!user)
      throw new UnauthorizedException('Email or password is incorrect');

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch)
      throw new UnauthorizedException('Email or password is incorrect');

    return user;
  }

  async login(user: User) {
    return {
      token: this.jwtService.sign(
        { email: user.email },
        {
          subject: user.id,
        },
      ),
    };
  }

  async registerUser(registerUserDto: RegisterUserDto) {
    const userAlreadyExists = await this.usersRepositories.findOne({
      email: registerUserDto.email,
    });

    if (userAlreadyExists)
      throw new BadRequestException('User already exists.');

    const passwordHash = await hash(registerUserDto.password, 8);

    registerUserDto.password = passwordHash;

    const user = this.usersRepositories.create(registerUserDto);

    await this.usersRepositories.save(user);

    const { token } = await this.login(user);

    return {
      token,
      ...user,
    };
  }
}
