import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGenerosDto } from './dto/create-generos.dto';
import { GenerosService } from './generos.service';

@ApiTags('generos')
@Controller('generos')
export class GenerosController {
  constructor(private generosService: GenerosService) {}

  @Get()
  findAll() {
    return this.generosService.findAll();
  }

  @Post()
  create(@Body() createGenerosDto: CreateGenerosDto) {
    return this.generosService.create(createGenerosDto);
}
}
