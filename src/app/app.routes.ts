import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/login/login';
import { Register } from './features/register/register';
import { Dashboard } from './features/dashboard/dashboard';
import { Profile } from './features/profile/profile';
import { WorkoutList } from './features/workouts/workout-list/workout-list';
import { WorkoutForm } from './features/workouts/workout-form/workout-form';
import { WorkoutDetail } from './features/workouts/workout-detail/workout-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Register },
  { path: 'dashboard', component: Dashboard },
  { path: 'perfil', component: Profile },
  { path: 'treinos', component: WorkoutList },
  { path: 'treinos/novo', component: WorkoutForm },
  { path: 'treinos/:id', component: WorkoutDetail },
];