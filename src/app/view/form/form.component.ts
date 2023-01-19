import { Component } from '@angular/core';
import { Topico } from 'src/app/interfaces/topicos';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  idUsuario!:string;
  idEnquete!:string;
  selecionado!:string;

  alert(){
    window.alert(`o usuario ${this.idUsuario} particiou da enquete: ${this.idEnquete} e votou ${this.selecionado}`)
  }
}
