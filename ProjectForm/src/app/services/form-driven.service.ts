import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { DataUserModels } from '../models/dataUser-models';
import { ConfirmRegisterModel } from '../models/confirmRegister-model';

@Injectable({
  providedIn: 'root'
})
export class FormDrivenService { 
  private readonly url = `${environment.apiURL}`;

  constructor(private http: HttpClient) { }
  
  registerUser(body:DataUserModels){
    debugger;
    this.http.post<ConfirmRegisterModel>(`${this.url}/register/user`, body, {observe: 'response'})
    .subscribe(
      response => {
        if(response.body.error){
          console.log(response.status);
          console.log(response.statusText);
          return response.body;
        }else if(response.body.proceed){
          console.log(response.status);
          console.log(response.statusText);
          
          return response.body;
        }else{
          console.log(response.status);
          console.log(response.statusText);
          return response.body;
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        return false;
      }
    );
    
    return;
  }

  //Está função sera implementada mais tarde !
  listUser(){
    this.http.get<DataUserModels[]>(`${ this.url }/listUser`, {observe: 'response'}).subscribe( 
    response => {
      console.log(response);

      return response.body;
    });
  }
}

