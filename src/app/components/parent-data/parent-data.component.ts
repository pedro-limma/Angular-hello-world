import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
  @Input() data1!:{name: string, age:number, profession: string};
  @Input() data2!:{name: string, age:number, profession: string};


}
