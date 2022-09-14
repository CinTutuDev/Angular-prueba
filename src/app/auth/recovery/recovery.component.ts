import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss'],
})
export class RecoveryComponent implements OnInit {
  /* form es el nombre del evento del formulario 
      es un obj de tipo FormGroup y inicializo funcion statica donde valido el formulario*/
  email: string = '';
  public form: FormGroup = new FormGroup({

    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(150),
    ]),
  });

  //creo el ruter para navegacion e importo
  constructor(private router: Router, private service: AuthService) {}

  ngOnInit(): void {}

  saveForm = (value: any) => {
    const values = this.form.value;
    console.log('saveForm', values);
  };

  //este es el evento del btn de ir que le lleva al login es para navegar entre ellos
  goLogin = () => {
    this.router.navigate(['/auth/login']);
  };
  /* declaramo la funcion del evento donde se captura el email y se muestra por consola */
  doRecovery = () => {
    console.log('Recoveyr', this.email);
  };
}
