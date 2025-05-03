import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CalculatorsModule } from './calculators/calculators.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AuthModule, CalculatorsModule, UsersModule],
  providers: [PrismaService],
})
export class AppModule {}
