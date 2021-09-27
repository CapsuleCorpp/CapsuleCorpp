import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'kaka21',
        database: 'postgres',
        entities: ['dist/workout/entities/' + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
