import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RunnerService, Corredor } from '../../core/services/runner';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  meuPace = 5.3; 
  sugestoes: Corredor[] = [];

  constructor(private runnerService: RunnerService) {}

  ngOnInit() {
    this.sugestoes = this.runnerService.buscarCompativeis(this.meuPace);
  }
}