import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  private authService = inject(AuthService);
  user: any;

  ngOnInit() {
    this.user = this.authService.getUserValue();
    
    if (this.user && !this.user.distancias) {
      this.user.distancias = ['5km', '10km'];
      this.user.dias = ['Segunda', 'Quarta', 'Sexta'];
    }
  }
}