import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginservService } from './loginserv.service';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {

  constructor(private login:LoginservService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.login.getislogin();
  }

}
