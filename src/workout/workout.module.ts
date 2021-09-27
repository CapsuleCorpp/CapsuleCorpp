import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';
import { DatabaseModule } from './databseProvider/database.module';
import { JwtStrategy } from './authentication/jwt.strategy';
import { JwtAuthGuard } from './authentication/jwt-auth-guard';
import { ExerciceController } from './exercice/exercice.controller';
import { ExerciceService } from './exercice/exercice.service';

@Module({
  imports: [DatabaseModule],
  controllers: [WorkoutController, ExerciceController],
  providers: [
    WorkoutService,
    JwtStrategy,
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
    ExerciceService,
  ],
})
export class WorkoutModule {}
