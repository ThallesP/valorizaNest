import { PartialType } from '@nestjs/mapped-types';
import { CreateComplimentDto } from './create-compliment.dto';

export class UpdateComplimentDto extends PartialType(CreateComplimentDto) {}
