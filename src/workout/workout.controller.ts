import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  Query,
  Req,
} from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { Workoutdto } from './dto/workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { Workoutquerydto } from './dto/workoutquerydto';
@UsePipes(new ValidationPipe({ transform: true }))
@Controller('workout')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Post()
  create(@Body() createWorkoutDto: Workoutdto, @Req() req) {
    return this.workoutService.create(createWorkoutDto, req.user);
  }
  @Get()
  findAll(@Query() queryParam: Workoutquerydto) {
    console.log(queryParam);
    return this.workoutService.findAll(queryParam);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkoutDto: UpdateWorkoutDto) {
    return this.workoutService.update(+id, updateWorkoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workoutService.remove(+id);
  }
}
