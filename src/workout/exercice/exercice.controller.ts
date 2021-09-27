import { Body, Controller, Delete, Param, Patch } from '@nestjs/common';
import { UpdateExerciceDto } from '../dto/update-exercice.dto';
import { ExerciceService } from './exercice.service';

@Controller('exercice')
export class ExerciceController {
  constructor(private exerciceService: ExerciceService) {}
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExerciceDto: UpdateExerciceDto,
  ) {
    return this.exerciceService.update(+id, updateExerciceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciceService.remove(+id);
  }
}
