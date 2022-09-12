import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { RegisterComponent } from './register/register.component';

/* se encuentran los router --> https://angular.io/guide/router */
/* Aqui se pasan todos susu modulos */
const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'recovery', component: RecoveryComponent },
  {path: 'register', component: RegisterComponent },
/*   para redireccionar */
  { path: '**', redirectTo: 'register'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
