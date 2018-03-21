import { Component } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombre = 'Rafael';
  nombre2 = 'rafael waYar taTeishi';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre : 'Logan',
    clave : 'Wolverine',
    edad : 500,
    direccion : {
      calle : 'Primera',
      casa : '19'}
  };
  // tslint:disable-next-line:no-shadowed-variable
  valorDePromesa = new Promise( ( resolve, reject ) => {
      setTimeout( () => resolve('LLego la data !'), 3500 );
  });
  fecha = new Date('2017-01-07'); // yyyy-mm-dd
  video = '-_leYftruXI';
  activar = true;

}
