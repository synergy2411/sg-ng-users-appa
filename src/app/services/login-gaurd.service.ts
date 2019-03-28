import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoginGaurdService implements CanActivate {

  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }

  }
  constructor(private authService: AuthService,
    private router: Router) { }

}
