import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RunnerService } from '../../core/services/runner';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  private authService = inject(AuthService);
  private runnerService = inject(RunnerService);

  user: any;
  meuPace: number = 0; // Esta linha declara a variável e resolve o erro
  sugestoes: any[] = [];

  ngOnInit() {
    this.user = this.authService.getUserValue();
    
    // Pegamos o pace que vem do usuário logado
    this.meuPace = this.user?.pace || 5.0;

    // Buscamos as sugestões usando esse pace
    this.sugestoes = this.runnerService.buscarCompativeis(this.meuPace);
  }
}