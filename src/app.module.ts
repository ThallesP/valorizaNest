import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './config/ormconfig';
import { UsersModule } from './users/users.module';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      ...ormconfig,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
