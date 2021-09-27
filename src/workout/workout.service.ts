import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Workoutdto } from './dto/workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { Workout } from './entities/workout.entity';
import { plainToClass } from 'class-transformer';
import { Exercice } from './entities/singleworkout.entity';
import { Rating } from './entities/reaction.entity';
import { Workoutquerydto } from './dto/workoutquerydto';
import { User } from './entities/User.entity';
@Injectable()
export class WorkoutService {
  constructor(
    @Inject('WORKOUT_REPOSITORY') private WorkoutRep: Repository<Workout>,
    @Inject('EXERCICE_REPOSITORY') private ExerciceRepo: Repository<Exercice>,
    @Inject('REACTION_REPOSITORY') private ReactionRepo: Repository<Rating>,
    @Inject('COMMENT_REPOSITORY') private CommentRepo: Repository<Comment>,
  ) {}

  async create(createWorkoutDto: Workoutdto, user: User) {
    const workout = plainToClass(Workout, createWorkoutDto);
    workout.user = user;
    await this.WorkoutRep.save(workout);
  }

  async findAll(queryparam: Workoutquerydto) {
    const allWorkout = await this.WorkoutRep.createQueryBuilder('workout')
      .innerJoinAndSelect('workout.exercice', 'exercice')
      .where('workout.bodyPart = :bodyPart', { bodyPart: queryparam.bodyPart })
      .andWhere('workout.goal= :goal', { goal: queryparam.goal })
      .andWhere('workout.sexe = :sexe', { sexe: queryparam.sexe })
      .andWhere('workout.category =:category', {
        category: queryparam.category,
      })
      .limit(10)
      .orderBy('workout.sharedDate')
      .getMany();

    return allWorkout;
  }

  async update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    const updatedWorkout = plainToClass(Exercice, updateWorkoutDto);
    return await this.WorkoutRep.createQueryBuilder()
      .update(Workout)
      .set(updatedWorkout)
      .where('id=:id', { id: id })
      .execute();
  }

  async remove(id: number) {
    return await this.WorkoutRep.delete(id);
  }
}
