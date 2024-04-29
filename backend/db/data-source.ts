import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'smartphone-shop',
  entities: ['dist/**/*.entity.{js, ts}'],
  logging: false,
  synchronize: true,
};

type DatabseUnion = 'postgres' | 'mysql' | 'mariadb' | 'oracle';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => {
    console.log(configService.get<DatabseUnion>('dbDatabase'));
    return {
      type: configService.get<DatabseUnion>('dbDatabase'),
      host: configService.get<string>('dbHost'),
      port: configService.get<number>('dbPort'),
      username: configService.get<string>('dbUsername'),
      database: configService.get<string>('dbName'),
      password: configService.get<string>('dbPassword'),
      entities: ['dist/**/*.entity.{js, ts}'],
      synchronize: true,
    };
  },
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
