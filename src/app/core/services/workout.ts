import { Injectable } from '@angular/core';

export interface Workout {
  id: number;
  local: string;
  data: string;
  hora: string;
  distancia: number;
  paceSugerido: string;
  organizador: string;
  participantes: number;
  descricao?: string; 
}

@Injectable({ providedIn: 'root' })
export class WorkoutService {
  private treinos: Workout[] = [
    { id: 1, local: 'Parque Ibirapuera', data: '2024-05-20', hora: '07:00', distancia: 10, paceSugerido: '5:15', organizador: 'Marcos', participantes: 4, descricao: 'Treino focado em rodagem leve no asfalto.' },
    { id: 2, local: 'Beira Mar', data: '2024-05-21', hora: '18:30', distancia: 5, paceSugerido: '6:30', organizador: 'Ana', participantes: 2, descricao: 'Corrida recreativa para iniciantes no final de tarde.' },
  ];

  getWorkouts() {
    return this.treinos;
  }

  getWorkoutById(id: number) {
    return this.treinos.find(t => t.id === id);
  }

  addWorkout(workout: any) {
    const newWorkout = {
      ...workout,
      id: this.treinos.length + 1,
      organizador: 'Você', 
      participantes: 1
    };
    this.treinos.unshift(newWorkout); 
  }
}