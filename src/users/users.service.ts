import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepositores } from './users.repositories';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private usersRepositories: UsersRepositores) {}

  async create(createUserDto: CreateUserDto) {
    const userAlreadyExists = await this.usersRepositories.findOne({
      email: createUserDto.email,
    });

    if (userAlreadyExists)
      throw new BadRequestException('User already exists.');

    const passwordHash = await hash(createUserDto.password, 8);

    createUserDto.password = passwordHash;

    const user = this.usersRepositories.create(createUserDto);

    await this.usersRepositories.save(user);

    return user;
  }

  async findAll() {
    return this.usersRepositories.find();
  }

  async findOne(id: string) {
    const user = await this.usersRepositories.findOne(id);
    if (!user) throw new NotFoundException('User not found.');

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepositories.findOne(id);

    if (!user) throw new NotFoundException('User not found.');

    const userUpdated = await this.usersRepositories.save({
      ...user,
      ...updateUserDto,
    });

    return userUpdated;
  }

  async remove(id: string) {
    const user = await this.usersRepositories.findOne(id);

    if (!user) throw new NotFoundException('User not found.');

    await this.usersRepositories.delete(user.id);

    return;
  }
}
