import { Injectable } from '@angular/core';

//es para que pueda ser importada/inyectada en otro sitio
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //currentUser = actualUsuario
 /*  static currentUser = null; */

  constructor() {}

  //creo funciones de sistemas de login(acceso)
  //recojo y guardo info del localStorage(clave valor)

  login = (user: any) => {
    localStorage.setItem('currentUser', user);
  };
  //recojo y borro clave = para cerrar sesion
  logout = () => {
    localStorage.removeItem('currentUser');
  };

  //esta logeado devuelve valor de la clave
  isLoged = (): boolean => {
    return localStorage.getItem('currentUser') !== null;
  };
}
