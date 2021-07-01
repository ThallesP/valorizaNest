import { ConnectionOptions } from 'typeorm';
import { config } from 'dotenv';
import { join } from 'path';

config();
const ormconfig: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  migrationsRun: true,
  migrations: [join(__dirname, '..', '/migrations/**/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: false,
};

export = ormconfig;
