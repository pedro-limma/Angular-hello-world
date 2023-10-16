import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userVitoria = {
    name: "Vitória",
    age: 18,
    profession: "Biomédica"
  }

  userPedro = {
    name: "Pedro",
    age: 18,
    profession: "Programador"
  }

  title = 'hello-world';
}
