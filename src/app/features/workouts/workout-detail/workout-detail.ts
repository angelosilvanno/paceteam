import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WorkoutService, Workout } from '../../../core/services/workout';

@Component({
  selector: 'app-workout-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './workout-detail.html',
  styleUrl: './workout-detail.css'
})
export class WorkoutDetail implements OnInit {
  treino?: Workout;

  constructor(
    private route: ActivatedRoute,
    private workoutService: WorkoutService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.treino = this.workoutService.getWorkoutById(id);
  }
}