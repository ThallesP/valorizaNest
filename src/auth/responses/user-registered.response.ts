import { ApiProperty } from '@nestjs/swagger';

export class UserRegisteredResponse {
  @ApiProperty()
  token: string;

  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;
}
