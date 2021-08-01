import { ApiProperty } from '@nestjs/swagger';

export class GenericErrorResponse {
  @ApiProperty({
    description: 'The status code',
  })
  statusCode: number;

  @ApiProperty({
    description: 'The message of the error',
  })
  message: string;

  @ApiProperty({
    description: 'The status code message',
  })
  error: string;
}
