import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { UsersRepositores } from 'src/users/users.repositories';

@Injectable()
export class ensureAdmin implements CanActivate {
  constructor(private usersRepositories: UsersRepositores) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const { admin } = await this.usersRepositories.findOne(request.user.id);

    if (!admin) throw new ForbiddenException("You're not admin");

    return true;
  }
}
