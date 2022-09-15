import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
/* al crearlo se lo tengo que pasar a la path de admin  canActivate : [AuthGuard] = app-routing...*/
export class AuthGuard implements CanActivate {

  /* creo el contructor y tengo que recoger el AuthService */

  constructor(private service: AuthService ){}

  canActivate(
    //la ruta a la que se puede entrar
    route: ActivatedRouteSnapshot,
    //estado actual y lo que devuelve ...Observable
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // TODO:FIXED: crear un servicio para gestionar esto
      //fincion del auth.service.ts
    return this.service.isLoged();
  }
  
}
