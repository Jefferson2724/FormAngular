import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataUserModels } from 'src/app/models/dataUser-models';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  dataUser: DataUserModels = {
    Nome:"",
    Telefone: null,
    Endereco:"",
    Cidade:"",
    Estado:"",
    CEP:""
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    
    console.log(this.dataUser);
  }
}
