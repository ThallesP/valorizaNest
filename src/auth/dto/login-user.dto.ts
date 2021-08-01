import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    description: 'The email of the User.',
    example: 'juliana@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'The password of the User.',
    example: 'juliana1234',
  })
  password: string;
}
