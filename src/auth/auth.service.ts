import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersRepositores } from 'src/users/users.repositories';

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
}
