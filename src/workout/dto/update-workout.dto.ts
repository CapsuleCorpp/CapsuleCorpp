import { PartialType } from '@nestjs/mapped-types';
import { Workoutdto } from './workout.dto';

export class UpdateWorkoutDto extends PartialType(Workoutdto) {}
