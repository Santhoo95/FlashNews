import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {
  constructor(private _loginService:LoginService,private _router:Router)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this._loginService.loggedIn)
      {
        return true;
      }
      this._router.navigate(["login"]);
    }
  }
