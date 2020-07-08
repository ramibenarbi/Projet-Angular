import { AuthService } from './auth.service'
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  firestoreUser: any[];
  constructor(private auth: AuthService,
    private router: Router) {}

  async canActivate(next, state): Promise<boolean> {
      const user = await this.auth.getUser();
      const loggedIn = !!user;
      if (!loggedIn) {
          console.log('access denied , login');
          this.router.navigate(['/login']);
      }
   else{
      return loggedIn;
      }
  }
}
