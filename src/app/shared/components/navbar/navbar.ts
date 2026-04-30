import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Adicione este import

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // Adicione aqui
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar { }