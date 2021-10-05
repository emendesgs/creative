import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  public logged = false;

  constructor(public authService: AuthService, public router: Router, public common: CommonService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.logged) {
      this.common.openSnackBar('Login necessário!');
      return this.router.navigateByUrl('/login');
    } else {
      return true;
    }
  }
}