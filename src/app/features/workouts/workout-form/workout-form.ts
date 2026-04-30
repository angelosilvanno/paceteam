import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { WorkoutService } from '../../../core/services/workout';

@Component({
  selector: 'app-workout-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './workout-form.html',
  styleUrl: './workout-form.css'
})
export class WorkoutForm {
  workoutForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private workoutService: WorkoutService,
    private router: Router
  ) {
    this.workoutForm = this.fb.group({
      local: ['', Validators.required],
      data: ['', Validators.required],
      hora: ['', Validators.required],
      distancia: ['', [Validators.required, Validators.min(1)]],
      paceSugerido: ['', Validators.required],
      descricao: ['']
    });
  }

  onSubmit() {
    if (this.workoutForm.valid) {
      this.workoutService.addWorkout(this.workoutForm.value);
      alert('Treino criado com sucesso! Boa corrida.');
      this.router.navigate(['/treinos']);
    }
  }
}