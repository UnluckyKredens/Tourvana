import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { TripContributor } from 'src/entities/relations/tripContributor.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, TripContributor]),
    AuthModule
],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
