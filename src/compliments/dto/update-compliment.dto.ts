import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateComplimentDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'The message that the User Receiver will see.',
    example: "Thanks for the help in the code! You're awesome.",
  })
  message: string;
}
