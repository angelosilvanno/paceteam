import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  user = {
    nome: 'Seu Nome de Corredor',
    paceMedio: '5:30',
    objetivo: 'Performance / Meia Maratona',
    distancias: ['5km', '10km', '21km'],
    dias: ['Segunda', 'Quarta', 'Sábado'],
    email: 'atleta@paceteam.com',
    foto: 'https://i.pravatar.cc/150?u=me'
  };
}