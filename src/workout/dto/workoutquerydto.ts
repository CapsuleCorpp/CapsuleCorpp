import { IsString, IsNotEmpty } from 'class-validator';

export class Workoutquerydto {
  @IsString()
  bodyPart: string;
  @IsNotEmpty()
  @IsString()
  goal: string;
  @IsString()
  category: string;
  @IsString()
  sexe: string;
}
