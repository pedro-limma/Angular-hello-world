import { Component } from '@angular/core';

import { Animal } from 'src/app/Interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})

export class ListRenderComponent {
  animals: Animal[] = [
    { name: "Chuck", type: "Dog", age: 0.7 },
    { name: "Tiffany", type: "Dog", age: 1 },
    { name: "Natasha", type: "Cat", age: 4 },
    { name: "Nina", type: "Cat", age: 3 }
  ]

  animalDetails = "";

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }
}
