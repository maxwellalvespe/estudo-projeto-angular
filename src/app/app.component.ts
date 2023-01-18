import { Component } from '@angular/core';

const topico = {
  descricao: 'Você é a favor a abertura de novas filiais em recife ?',
  opcao: ['SIM', 'NAO']
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dado = { name: "Maxwell", cpf: "999999" };

  topico = {
    descricao: 'Você é a favor a abertura de novas filiais em recife ?',
    opcao: ['SIM', 'NAO']
  }

  title = "Enquete Cooperativa"

}
