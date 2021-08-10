import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the User.',
    example: 'Julia',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'The e-mail of the User.',
    example: 'julia@juliacontact.com',
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Is the User administrator?',
    example: false,
  })
  admin: boolean;

  @IsNotEmpty()
  @ApiProperty({
    description: 'The password of the User.',
    example: '1234',
  })
  password: string;
}
