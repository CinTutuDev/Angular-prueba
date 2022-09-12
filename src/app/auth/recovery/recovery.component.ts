import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {

   /* form es el nombre del evento del formulario 
      es un obj de tipo FormGroup y inicializo funcion statica donde valido el formulario*/
      email:string= ''
      public form: FormGroup = new FormGroup({
    
        email: new FormControl("", [
          Validators.required,
          Validators.email,
          Validators.maxLength(150)
        ])
      })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  saveForm = (value:any) => {
    const values = this.form.value
    console.log('saveForm', values); 

  }

  //este es el evento del btn de ir que le lleva al login
  goLogin = () => {
    this.router.navigate(['/auth/login']);
  }
  doRecovery = () => {
    console.log('Recoveyr', this.email)
  }
}
