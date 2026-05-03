import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  
  user$ = this.userSubject.asObservable();

  login(userData: any) {
    const mockUser = {
      nome: userData.nome || userData.email.split('@')[0], 
      email: userData.email,
      pace: userData.paceMedio || 5.5,
      foto: 'https://i.pravatar.cc/150?u=angelo',
      distancias: userData.distancias ? [userData.distancias] : ['5km', '10km'],
      dias: userData.diasDisponiveis ? [userData.diasDisponiveis] : ['Segunda', 'Quarta', 'Sexta']
    };
    this.userSubject.next(mockUser); 
  }

  logout() {
    this.userSubject.next(null); 
  }

  getUserValue() {
    return this.userSubject.value;
  }
}