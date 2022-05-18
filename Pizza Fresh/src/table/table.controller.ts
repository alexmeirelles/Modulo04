import { Controller, Get, Post, Body } from '@nestjs/common';
import { TableService } from './table.service';
import {CreateTableDto} from './dto/create-table.dto';

@Controller('table')
export class TableController {
  constructor(private tableService: TableService) {}

  @Get()
  findAll(): string {
    return this.tableService.findAll();
  }

  @Post()
  create(@Body()createTableDto: CreateTableDto): string {
    return this.tableService.create(createTableDto);
  }
}
