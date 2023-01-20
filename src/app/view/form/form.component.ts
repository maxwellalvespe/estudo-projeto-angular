import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Topico } from 'src/app/interfaces/topicos';
import { Votacao } from 'src/app/interfaces/Votacao';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() idUsuario!: string;
  @Input() idEnquete!: string;
  @Input() selecionado!: string;

  @ViewChild("segundaFormaDeObterOValorDoInput",{static: true}) segundaForma!: ElementRef;

  formVotacao!: FormGroup

  constructor() { }
  ngOnInit(): void {
    //TODO inicializando o form
    this.formVotacao = new FormGroup({
      idUsuario: new FormControl('',[Validators.required]),
      idEnquete: new FormControl('',[Validators.required]),
      selectionado: new FormControl('',[Validators.required])
    })
  }

  getIdUsuario(){
    return this.formVotacao.get('idUsuario');
  }



  print() {
    console.log(`o usuario ${this.idUsuario} particiou da enquete: ${this.idEnquete} e votou ${this.selecionado}`)
    console.log(`Imprimindo o valor da segunda forma para coletar os dados do input no Angular ${this.segundaForma.nativeElement.value}`)
    console.log(this.segundaForma.nativeElement)
  }
}
