import { PartialType } from '@nestjs/mapped-types';
import { ExerciceDto } from './exercice.dto';

export class UpdateExerciceDto extends PartialType(ExerciceDto) {}
