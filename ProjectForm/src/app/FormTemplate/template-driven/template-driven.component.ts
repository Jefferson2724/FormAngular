import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataUserModels } from 'src/app/models/dataUser-models';
import { StatesModel } from 'src/app/models/States-model';
import { FormDrivenService } from 'src/app/services/form-driven.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  mensagem: String;
  states:any;
  cleanForm:boolean;
  
  dataUser: DataUserModels = {
    Nome:"",
    Telefone: null,
    Endereco:"",
    Cidade:"",
    Estado:"",
    CEP:null,
  };

  constructor(
    private statesModel: StatesModel,
    private formDrivenService: FormDrivenService
  ) { 
    this.states = this.statesModel.States;
    this.cleanForm = undefined;
  }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    debugger;
    if(this.checkFields(form)){
      this.mensagem = "Preencha este campo!";
      return;
    }

  
    if(this.requestRegisterUser(this.dataUser)){
      this.cleanForm = true;
      form.reset();
    }else{
      this.cleanForm = false 
    }
  }

  private checkFields(form: NgForm):boolean {
    if(form.value['name'] == ""){
      return true;
    }
    else if(form.value['phone'] == null){
      return true;
    }
    else if(form.value['address'] == ""){
      return true;
    }
    else if(form.value['city'] == ""){
      return true;
    }
    else if(form.value['state'] == ""){
      return true;
    }
    else if(form.value['CEP'] == null){
      return true;
    }

    this.mensagem = "";
    return false;
  }

  requestRegisterUser(user: DataUserModels){
    let ola:any = this.formDrivenService.registerUser(user)
    .subscribe( 
      response => {
        
        if(response){
          console.log("Não foi possível fazer o cadastro, tente novamente !");

          return false;
        }else if (response){
          console.log("Sucesso!");

          return true;
        }else{

          return true;
        }
    });
  }
}