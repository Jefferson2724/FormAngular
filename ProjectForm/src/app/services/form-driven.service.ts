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
    let responseEvent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(undefined); 

    this.http.post<ConfirmRegisterModel>(`${this.url}/register/user`, body, {observe: 'response'})
    .subscribe(
      response => {
        if(response.body.error){
          console.log("Deu errado...");
          return responseEvent.next(false);
        }else if(response.body.proceed){
          console.log("Deu bom");
          return responseEvent.next(true);
        }else{
          return responseEvent.next(false);
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        return responseEvent.next(false);
      }
    );

    return responseEvent.asObservable();
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

