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
      pace: 5.5,
      foto: 'https://i.pravatar.cc/150?u=angelo'
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