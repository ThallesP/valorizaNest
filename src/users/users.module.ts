import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepositores } from './users.repositories';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepositores])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
