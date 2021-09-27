import { ExerciceDto } from './exercice.dto';
import { IsNotEmpty, IsString } from 'class-validator';
export class Workoutdto {
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  exercice: ExerciceDto[];
  @IsNotEmpty()
  @IsString()
  bodyPart: string;
  @IsNotEmpty()
  @IsString()
  goal: string;
  @IsNotEmpty()
  @IsString()
  category: string;
  @IsNotEmpty()
  @IsString()
  sexe: string;
}
