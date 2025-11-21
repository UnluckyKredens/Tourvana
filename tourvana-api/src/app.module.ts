import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TripModule } from './trip/trip.module';
import { AttractionModule } from './trip/attraction/attraction.module';
import { HotelModule } from './trip/hotel/hotel.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user/user.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),

    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (cS: ConfigService) => ({
        secret: cS.get<string>('JWT_ACCESS_SECRET', ''),
        signOptions: { expiresIn: '180h', algorithm: 'HS256'},
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cS: ConfigService) => ({
        type: 'mysql',
        host: cS.get<string>('DB_HOST'),
        port: cS.get<number>('DB_PORT'),
        username: cS.get<string>('DB_USERNAME'),
        password: cS.get<string>('DB_PASSWORD'),
        database: cS.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity*{.ts,.js}'],
        synchronize: true,
      }),
    }),
    AuthModule,
    TripModule,
    AttractionModule,
    HotelModule,
    UserModule,
    SeedModule

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
