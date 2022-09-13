import { Injectable } from '@angular/core';

//es para que pueda ser importada
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  static currentUser = null

  constructor() {}

  //creo funciones de sistemas de login
  login = (user: any) => {
    AuthService.currentUser = user
  }

  logout = () => {
    AuthService.currentUser = null
  }

  isLoged = ():boolean => {
    return ( AuthService.currentUser === null)
  }
}
