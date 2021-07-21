import { IsNotEmpty } from 'class-validator';

export class UpdateComplimentDto {
  @IsNotEmpty()
  message: string;
}
