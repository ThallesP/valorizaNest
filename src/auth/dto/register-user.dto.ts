import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({
    description: 'The name of the User.',
    example: 'Juliana',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The email of the User.',
    example: 'juliana@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the User.',
    example: 'juliana1234',
  })
  @IsNotEmpty()
  password: string;
}
