import { Injectable } from '@nestjs/common';
import { CreateJogosDto } from './dto/create-jogos.dto';
import { Jogos } from './entities/jogos.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JogosService {
  jogos: Jogos[] = [];

  constructor(private readonly prisma: PrismaService) {}


  findAll() {
    return this.jogos;
  }

  create(createJogosDto: CreateJogosDto) {
    const jogo: Jogos = { id: 'random_id', ...createJogosDto };

    this.jogos.push(jogo);

    return jogo;
  }
}
