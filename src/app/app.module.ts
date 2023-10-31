import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonnagesComponent } from './personnages/personnages.component';
import { PersonnagesFormatesComponent } from './personnages-formates/personnages-formates.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonnagesComponent,
    PersonnagesFormatesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
