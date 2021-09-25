import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { DataUserModels } from '../models/dataUser-models';

@Injectable({
  providedIn: 'root'
})
export class FormDrivenService {
  private readonly url = `${environment.apiURL}`;

  constructor(private http: HttpClient) { }
  
  registerUser(body:DataUserModels){
    let responseRegister: BehaviorSubject<DataUserModels> = new BehaviorSubject(undefined);

    this.http.post<DataUserModels>(`${this.url}/register/user`, body, {observe: 'response'})
    .subscribe(
      response => {
        if(!response.status){
          console.log("Deu errado...");
          responseRegister.next(response.body);
        }else {
          console.log("Deu bom");
          responseRegister.next(response.body);
        }
      },
      error => {
        console.log(error.status);

        responseRegister.next(undefined);
      }
    );

    return responseRegister.asObservable();
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

