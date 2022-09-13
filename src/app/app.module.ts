import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';/*  lo carga de bootstrap: [AppComponent] */
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './common/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule ,
    TranslateModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
