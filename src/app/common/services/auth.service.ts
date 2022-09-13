import { Injectable } from '@angular/core';

//es para que pueda ser importada
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //currentUser = actualUsuario
 /*  static currentUser = null; */

  constructor() {}

  //creo funciones de sistemas de login(acceso)
  //recojo y guardo info del localStorage(clave valor)
<<<<<<< HEAD
  //despues hay que ir a login.component.ts, añadir al constructor AuthService + import
=======
  //despues hay que ir a login.component.ts, añadir al constructor AuthService
>>>>>>> e8e12706e930d440f49e0e3eccbb1bb74839ce8c
  login = (user: any) => {
    localStorage.setItem('currentUser', user);
  };
  //recojo y borro clave = para cerrar sesion
  logout = () => {
    localStorage.removeItem('currentUser');
  };

  //esta logeado devuelve valor de la clave
  isLoged = (): boolean => {
    return localStorage.getItem('currentUser') === null;
  };
}
