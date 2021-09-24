import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataUserModels } from 'src/app/models/dataUser-models';
import { StatesModel } from 'src/app/models/States-model';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  mensagem: String;
  states:any;
  
  dataUser: DataUserModels = {
    Nome:"",
    Telefone: null,
    Endereco:"",
    Cidade:"",
    Estado:"",
    CEP:null,
  };

  constructor(private statesModel: StatesModel) { 
    this.states = this.statesModel.States;
  }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    this.resetMessageError();

    if(this.checkFields(form)){
      console.log(this.mensagem);
      return;
    }

    
    console.log(this.dataUser);
  }

  private checkFields(form: NgForm) {
    if(form.value['name'] == ""){
      this.mensagem = this.mensagem.replace('%s', "nome");
      return true;
    }
    if(form.value['phone'] == null){
      this.mensagem = this.mensagem.replace('%s', 'telefone');
      return true;
    }
    if(form.value['address'] == ""){
      this.mensagem = this.mensagem.replace('%s', "address");
      return true;
    }
    if(form.value['city'] == ""){
      this.mensagem = this.mensagem.replace('%s', "city");
      return true;
    }
    if(form.value['state'] == ""){
      this.mensagem = this.mensagem.replace('%s', "state");
      return true;
    }
    if(form.value['CEP'] == null){
      this.mensagem = this.mensagem.replace('%s', "CEP");
      return true;
    }

    return false;
  }

  resetMessageError(){
    this.mensagem = "O campo %s não esta preenchido";
  }
}