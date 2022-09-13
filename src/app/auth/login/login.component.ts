import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //es la variable inicializada del ngModel

  /* form es el nombre del evento del formulario 
      es un obj de tipo FormGroup y inicializo funcion statica donde valido el formulario*/
  public form: FormGroup = new FormGroup({
    email: new FormControl('user@email.com', [
      Validators.required,
      Validators.email,
      Validators.maxLength(150),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(150),
    ]),
  });

  constructor(private router: Router, private service: AuthService) {}

  ngOnInit(): void {
    const obj = {
      email: 'user@.angular.com',
      password: '1234',
    };
    this.form.patchValue(obj);

    //creo un listener con el form para recoger los errores del formulario
    //valueChanges = devuelve la info actual del formulario
    //para los erores = controls son las keys
    this.form.valueChanges.subscribe((data) => {
      /*console.log(data); */
      const ctrls = this.form.controls;
      Object.keys(ctrls).forEach((ctrlName) => {
        /* console.log('controler', ctrl); */
        const errors = this.form.get(ctrlName)?.errors || [];
        console.log(ctrlName, errors);
      });
    });
  }

  saveForm = () => {
    const values = this.form.value;
    console.log('saveForm', values);
  };
  goRegister = () => {};
  //este es el evento del btn de ir que le lleva al login
  goRecovery = () => {
    this.router.navigate(['/auth/recovery']);
  };
}
