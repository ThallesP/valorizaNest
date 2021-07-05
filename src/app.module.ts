import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './config/ormconfig';
import { UsersModule } from './users/users.module';
import { config } from 'dotenv';
import { ComplimentsModule } from './compliments/compliments.module';

config();

@Module({
  imports: [
    UsersModule,
    ComplimentsModule,
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      ...ormconfig,
    }),
    ComplimentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
