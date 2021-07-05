import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ComplimentsService } from './compliments.service';
import { CreateComplimentDto } from './dto/create-compliment.dto';
import { UpdateComplimentDto } from './dto/update-compliment.dto';

@Controller('compliments')
export class ComplimentsController {
  constructor(private readonly complimentsService: ComplimentsService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  create(@Body() createComplimentDto: CreateComplimentDto) {
    return this.complimentsService.create(createComplimentDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll() {
    return this.complimentsService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.complimentsService.findOne(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComplimentDto: UpdateComplimentDto,
  ) {
    return this.complimentsService.update(id, updateComplimentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.complimentsService.remove(id);
  }
}
