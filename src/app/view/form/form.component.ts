import { Component } from '@angular/core';
import { Topico } from 'src/app/interfaces/topicos';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  topicos: Topico[] = [{ descricao: "PRIMEIRO TESTE", opcao:'SIM' },
  { descricao: "PRIMEIRO TESTE", opcao:'NAO'}];
}
