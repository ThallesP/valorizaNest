import { ConnectionOptions } from 'typeorm';
import { config } from 'dotenv';
import { join } from 'path';

config();
const ormconfig: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  migrationsRun: true,
  migrations: [join(__dirname, '..', '/migrations/**/*{.ts,.js}')],
  ssl:
    process.env.NODE_ENV == 'production'
      ? {
          rejectUnauthorized: false,
        }
      : undefined,
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: false,
};

export = ormconfig;
