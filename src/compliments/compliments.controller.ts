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
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import type { Request as RequestType } from 'express';
import { JwtAuthGuard } from 'src/auth/strategies/JwtAuthGuard';
import { ComplimentsService } from './compliments.service';
import { CreateComplimentDto } from './dto/create-compliment.dto';
import { UpdateComplimentDto } from './dto/update-compliment.dto';

@Controller('compliments')
@ApiTags('Compliments')
@UseGuards(JwtAuthGuard)
export class ComplimentsController {
  constructor(private readonly complimentsService: ComplimentsService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  create(
    @Request() request: RequestType,
    @Body() createComplimentDto: CreateComplimentDto,
  ) {
    return this.complimentsService.create(request.user, createComplimentDto);
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
    @Request() request: RequestType,
    @Body() updateComplimentDto: UpdateComplimentDto,
  ) {
    return this.complimentsService.update(
      id,
      request.user,
      updateComplimentDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.complimentsService.remove(id);
  }
}
