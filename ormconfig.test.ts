import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
    name: 'default',
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'postgres',
    schema: 'public',
    logging: ['error', 'warn', 'log'],
    synchronize: true,
    entities: ['src/models/**/*.ts'],
    migrations: ['migrations/*.ts'],
    subscribers: ['src/subscribers/*.ts'],
});

