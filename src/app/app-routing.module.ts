import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guards/auth.guard';
import { InicioComponent } from './inicio/inicio.component';
/*aqui van las rutas : modulos o componentes(si la app es complicada(navegacion mas de un componente)
 en modulo si es stática en componente  ) */
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    /* para CONTROLAR LOGEO del usuario = solo se puede logear de una forma: el atributo del obj es canActivate 
    y le mandamos un AuthGuard. Para ello creo guards dentro de common se crea con los comandos "$ ng g guard common/guards/auth"
     1º common/guards/  y creo -> $ ng g guard common/guards/auth*/
    canActivate : [AuthGuard]
  },
  {path: 'inicio',  component: InicioComponent },
  /* si me vienen con cualqueor cosa lo redirecciono a index*/
  {path: '**', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
