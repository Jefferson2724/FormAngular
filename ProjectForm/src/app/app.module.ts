import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './FormTemplate/template-driven/template-driven.component';

import { StatesModel } from './models/States-model';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [StatesModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
