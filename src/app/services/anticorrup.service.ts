import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AnticorrupService {
consultas:any[] = [];


  constructor( private http:HttpClient) {
  this.cargarData();
  }


  cargarData(){
this.http.get("assets/data/consulta_anticorrupcion_municipios.json")
.subscribe( (respuesta: any[])=> {
	//this.consultas.push(respuesta);
	//console.log(this.consultas);

	this.consultas=respuesta.filter(dep => dep["departamento"].includes("BOYACA"));
			console.log(this.consultas);

});

  }
	
}
