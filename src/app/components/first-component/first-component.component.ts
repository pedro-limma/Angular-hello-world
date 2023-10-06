import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  Criador: string = "Pedro";
  Mensagem: string = "Estudar Angular";
  CriacaoRecado: string = new Date().toUTCString();

}
