import { Component } from '@angular/core';
import {AnticorrupService} from "./services/anticorrup.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consulta';
  selected=0;
  constructor( private _ds:AnticorrupService) { }

onChange(index :number) {
this.selected=index;
}
}
