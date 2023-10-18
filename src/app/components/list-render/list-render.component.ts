import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals = [
    { name: "Chuck", type: "Dog" },
    { name: "Tiffany", type: "Dog" },
    { name: "Natasha", type: "Cat" },
    { name: "Nina", type: "Cat" }
  ]
}
