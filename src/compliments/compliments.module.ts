import { Module } from '@nestjs/common';
import { ComplimentsService } from './compliments.service';
import { ComplimentsController } from './compliments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComplimentsRepositories } from './compliments.repositories';
import { UsersRepositores } from 'src/users/users.repositories';

@Module({
  imports: [
    TypeOrmModule.forFeature([ComplimentsRepositories, UsersRepositores]),
  ],
  controllers: [ComplimentsController],
  providers: [ComplimentsService],
})
export class ComplimentsModule {}
