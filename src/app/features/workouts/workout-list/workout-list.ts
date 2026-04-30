import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutService, Workout } from '../../../core/services/workout';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-list.html',
  styleUrl: './workout-list.css'
})
export class WorkoutList implements OnInit {
  treinos: Workout[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.treinos = this.workoutService.getWorkouts();
  }

  participar(id: number) {
    alert('Você se inscreveu para o treino! Prepare o tênis. 👟');
  }
}