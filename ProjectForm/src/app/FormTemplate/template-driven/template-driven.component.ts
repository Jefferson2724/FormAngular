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
  states:any;
  dataUser: DataUserModels = {
    Nome:"",
    Telefone: null,
    Endereco:"",
    Cidade:"",
    Estado:"",
    CEP:""
  }

  constructor(private statesModel: StatesModel) { 
    this.states = this.statesModel.States;
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    
    console.log(this.dataUser);
  }
}
