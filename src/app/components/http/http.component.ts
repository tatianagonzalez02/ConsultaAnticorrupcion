import { Component, OnInit ,Input} from '@angular/core';
import {AnticorrupService} from "../../services/anticorrup.service";
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor( private _ds:AnticorrupService) { }
@Input()
indexSelected:number;
  ngOnInit() {
  }

}
