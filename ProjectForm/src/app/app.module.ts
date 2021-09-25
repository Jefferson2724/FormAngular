import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './FormTemplate/template-driven/template-driven.component';

import { StatesModel } from './models/States-model';
import { Services } from './services';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ...Services,
    StatesModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
