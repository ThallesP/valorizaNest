import { ApiProperty } from '@nestjs/swagger';

export class UserLoggedInResponse {
  @ApiProperty()
  token: string;
}
