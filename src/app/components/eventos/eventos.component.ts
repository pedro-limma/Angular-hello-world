import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {

  show: Boolean = false;
  cont: number = 0;
  htmlContent: String = `<p>Adicionando linha ${this.cont}</p>`;

  moves: Array<String> = ['cima', 'esquerda', 'direita', 'baixo'];
  move: String = "";

  showMessage(): void {
    this.show = !this.show; // toggle 
  }

  sum(): void {
    this.cont += 1;
    if (this.cont / 10 % 0)
      alert('Mais 10');
  }

}
