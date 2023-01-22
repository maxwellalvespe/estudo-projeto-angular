import { Component, Input, OnInit } from '@angular/core';
import { Users } from './models/users';
import { UsersService } from './services/users.service';

const topico = {
  descricao: 'Você é a favor a abertura de novas filiais em recife ?',
  opcao: ['SIM', 'NAO']
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  user = {} as Users
  users!: Users[];

  constructor(private userService: UsersService){}

  ngOnInit(): void {
   this.getUsers()
  }

  dado = { name: "Maxwell", cpf: "999999" };

  click(){
    this.getUsers()
  }
  getUsers(){
    this.userService.getUsers().subscribe((us: Users[]) => {
      this.users = us;
    });
  }

  topico = {
    descricao: 'Você é a favor a abertura de novas filiais em recife ?',
    opcao: ['SIM', 'NAO']
  }

  title = "Enquete Cooperativa"

  selected(user:Users): void{
    this.user = user;
    alert(this.user.nome)
  }

}
