import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateComplimentDto {
  @IsNotEmpty()
  @ApiProperty()
  user_receiver: string;

  @IsNotEmpty()
  @ApiProperty()
  message: string;
}
