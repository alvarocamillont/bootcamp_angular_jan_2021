import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUsersDto {
  @ApiPropertyOptional()
  id: string;

  @ApiPropertyOptional()
  username: string;

  @ApiPropertyOptional()
  password: string;

  @ApiPropertyOptional()
  isSuperUser: boolean;

}
