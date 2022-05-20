import { Injectable } from '@nestjs/common';
import { CreateGenerosDto } from './dto/create-generos.dto';
import { Generos } from './entities/generos.entity';

@Injectable()
export class GenerosService {
  generos: Generos[] = [];

  findAll() {
    return this.generos;
  }

  create(createGenerosDto: CreateGenerosDto) {
    const genero: Generos = { id: 'random_id', ...createGenerosDto };

    this.generos.push(genero);

    return genero;
  }
}
