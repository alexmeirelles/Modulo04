import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';

@Injectable()
export class TableService {
  findAll(): string {
  return 'Buscar mesas';
}
  create(createTableDto: CreateTableDto): string {
  return 'Criar mesa' + JSON.stringify(createTableDto);
}
}
