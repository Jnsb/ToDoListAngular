import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = "";

  alunos: String[] = [];
  

adicionar(){
  let nome = this.alunos.push(this.nome);
}

excluir(param){
  let remove = this.alunos.splice(param,1);
}

}
