import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {
  transform(value: string , todas: boolean = true ): string {
   // throw new Error('Method not implemented.');
  value = value.toLocaleLowerCase();
  let nom = [];
  const nombres = value.split(' ');
  if (todas) {
      nom = nombres.map( (nombre, index)  => {
      return nombre.charAt(0).toUpperCase() + nombre.slice(1);
    });
  } else {
    nombres[0] = nombres[0][0].toLocaleUpperCase() + nombres[0].substr(1);
    return nombres.join(' ');
  }

   return nom.join(' ');
  }
}
