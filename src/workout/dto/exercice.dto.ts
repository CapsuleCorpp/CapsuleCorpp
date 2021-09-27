import { IsNotEmpty, IsString } from 'class-validator';

export class ExerciceDto {
  @IsNotEmpty()
  @IsString()
  exerciceName: string;
  @IsNotEmpty()
  sets: string;
  @IsNotEmpty()
  rest: string;
  @IsNotEmpty()
  reps: string;
  @IsNotEmpty()
  tempo: string;
}
