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
    if(this.checkFields(form)){
      this.mensagem = "Preencha este campo!";
      return;
    }

    console.log(this.dataUser);
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
}