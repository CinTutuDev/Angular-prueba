import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*aqui van las rutas : modulos o componentes(si la app es complicada(navegacion mas de un componente)
 en modulo si es stática en componente  ) */
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
