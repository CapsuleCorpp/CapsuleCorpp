import { Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm/repository/Repository';
import { UpdateExerciceDto } from '../dto/update-exercice.dto';
import { Exercice } from '../entities/singleworkout.entity';

@Injectable()
export class ExerciceService {
  constructor(
    @Inject('EXERCICE_REPOSITORY') private ExerciceRepo: Repository<Exercice>,
  ) {}
  async update(id: number, updateWorkoutDto: UpdateExerciceDto) {
    const updatedWorkout = plainToClass(Exercice, updateWorkoutDto);
    return await this.ExerciceRepo.createQueryBuilder()
      .update(Exercice)
      .set(updatedWorkout)
      .where('id=:id', { id: id })
      .execute();
  }

  async remove(id: number) {
    return await this.ExerciceRepo.delete(id);
  }
}
