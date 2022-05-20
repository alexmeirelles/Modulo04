import { Injectable } from '@nestjs/common';
import { CreateJogosDto } from './dto/create-jogos.dto';
import { Jogos } from './entities/jogos.entity';

@Injectable()
export class JogosService {
  jogos: Jogos[] = [];
  findAll() {
    return this.jogos;
  }

  create(createJogosDto: CreateJogosDto) {
    const jogo: Jogos = { id: 'random_id', ...createJogosDto };

    this.jogos.push(jogo);

    return jogo;
  }
}
