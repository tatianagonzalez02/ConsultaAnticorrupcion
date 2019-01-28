import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VariablesComponent } from './components/variables/variables.component';
import {FormsModule} from "@angular/forms";
import { HttpComponent} from './components/http/http.component';
//servicios
import {AnticorrupService} from "./services/anticorrup.service";

//HttpClientModule
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    HttpComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [AnticorrupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
