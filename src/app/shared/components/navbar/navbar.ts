import { Component, inject } from '@angular/core'; // Adicione o inject aqui
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  // Em vez de colocar no constructor, injetamos direto na variável
  private authService = inject(AuthService);
  
  // Agora o user$ consegue ler o serviço sem erro
  user$ = this.authService.user$;

  logout() {
    this.authService.logout();
  }
}