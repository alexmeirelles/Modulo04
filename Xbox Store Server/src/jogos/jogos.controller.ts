import {Body Controller, Get, Post } from '@nestjs/common';
import { CreateJogosDto } from './dto/create-jogos.dto';
import { JogosService } from './jogos.service';

@Controller('jogos')
export class JogosController {
  constructor(private jogosService: JogosService) {}

  @Get()
  findAll() {
    return this.jogosService.findAll();
  }

  @Post()
  create(@Body() createJogosDto: CreateJogosDto) {
    return this.jogosService.create(createJogosDto);
}
}
