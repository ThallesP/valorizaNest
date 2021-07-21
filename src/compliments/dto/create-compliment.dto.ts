import { IsNotEmpty } from 'class-validator';

export class CreateComplimentDto {
  @IsNotEmpty()
  user_receiver: string;

  @IsNotEmpty()
  message: string;
}
