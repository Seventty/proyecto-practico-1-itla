import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tareaStatus'
})
export class TareaStatusPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Está completada' : 'No está completada';
  }

}
