import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateComplimentDto {
  @IsNotEmpty()
  @ApiProperty()
  message: string;
}
