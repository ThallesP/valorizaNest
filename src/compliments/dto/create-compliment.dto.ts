import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateComplimentDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'The ID of the User that will receive the Compliment.',
    example: 'b10a4a3d-4323-4df7-87e2-7940a71f194a',
  })
  user_receiver: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'The message that the User Receiver will see.',
    example: "Thanks for the help in the code! You're awesome.",
  })
  message: string;
}
