import { Injectable } from '@angular/core';

export interface Corredor {
  id: number;
  nome: string;
  pace: number;
  objetivo: string;
  foto: string;
}

@Injectable({
  providedIn: 'root'
})
export class RunnerService {
  private corredores: Corredor[] = [
    { id: 1, nome: 'Marcos Silva', pace: 4.5, objetivo: 'Performance', foto: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, nome: 'Ana Costa', pace: 5.2, objetivo: 'Saúde', foto: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, nome: 'Bruno Souza', pace: 5.8, objetivo: 'Meia Maratona', foto: 'https://i.pravatar.cc/150?u=3' },
    { id: 4, nome: 'Carla Dias', pace: 6.2, objetivo: 'Social', foto: 'https://i.pravatar.cc/150?u=4' },
    { id: 5, nome: 'Ricardo Lima', pace: 5.0, objetivo: 'Performance', foto: 'https://i.pravatar.cc/150?u=5' },
    { id: 6, nome: 'Julia Farias', pace: 5.4, objetivo: 'Saúde', foto: 'https://i.pravatar.cc/150?u=6' }
  ];

  getCorredores() {
    return this.corredores;
  }

  buscarCompativeis(meuPace: number): Corredor[] {
    return this.corredores.filter(c => Math.abs(c.pace - meuPace) <= 0.5);
  }
}