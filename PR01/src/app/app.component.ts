import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PR01';
  nombre:string = 'Joan';
  apellido:string = 'Montoliu';
  edad:number = 41;
  salario:any = [1000,2000,3000];
  activo:boolean = true;
  mensaje:string='';

  isActive(){
    if(this.activo){
      this.mensaje = "El user ya tiene trabajo";
    }
    else{
      this.mensaje = "El user no tiene trabajo";

    }
    return this.mensaje;
  }

  contador = 1;
  incrementar(){
    this.contador++;
  }
}
