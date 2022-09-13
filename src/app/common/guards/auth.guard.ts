import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    //la ruta a la que se puede entrar
    route: ActivatedRouteSnapshot,
    //estado actual y lo que devuelve ...Observable
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // TODO:FIXED: crear un servicio para gestionar esto
    return true;
  }
  
}
