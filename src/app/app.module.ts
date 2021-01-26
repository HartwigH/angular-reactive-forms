import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from '../app/card-form/card-form.component';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, CardFormComponent, InputComponent, CardComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
