import { Options } from "@mikro-orm/core";

const config: Options = {
    type: 'postgresql',
    host: 'localhost',
    port: 5432,
    user: 'postgresql',
    password: 'postgres',
    dbName: 'nestjs-tutorial',
    entities: ['dist/**/*.entity.js'],
    entitiesTs:['src/**/*.entity.ts']
}

export default config;