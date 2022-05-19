import { isPositive, isNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
  @isPositive()
  @isNumber()
  @ApiProperty({
    description: 'O numero da mesa',
    example: 1,
  })
  number: number;
}
