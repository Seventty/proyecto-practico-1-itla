import { Injectable } from '@angular/core';
import { ITarea } from '@interfaces/ITarea';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private listaTareas: Array<ITarea> = [
    {
      id: 1,
      descripcion: "Tarea de Angular",
      completada: true
    },
    {
      id: 2,
      descripcion: "Tarea de Typescript",
      completada: true
    },
    {
      id: 3,
      descripcion: "Tarea de AWS",
      completada: true
    },
    {
      id: 4,
      descripcion: "Tarea de React",
      completada: false
    },
    {
      id: 5,
      descripcion: "Tarea de VUE",
      completada: false
    }
  ]

  private $tareaCollection: BehaviorSubject<Array<ITarea>> = new BehaviorSubject<Array<ITarea>>(this.listaTareas)

  constructor() { }

  get getTareas(): Observable<Array<ITarea>> {
    return this.$tareaCollection.asObservable()
  }

  public nuevaTarea(tareaForm: any) {
    tareaForm.id = this.listaTareas.length + 1;
    this.listaTareas.push(tareaForm);
  }

  public marcarCorregido(id: number) {
    const tarea: ITarea = this.getTareaById(id);
    tarea.completada = true;
  }

  private getTareaById(id: number): ITarea {
    const tarea: ITarea | undefined = this.listaTareas.find(i => i.id === id);
    if (!tarea) {
      throw new Error(`Tarea con id ${id} no encontrada`);
    }
    return tarea;
  }

  get getAllTareasCount(): number{
    return this.listaTareas.length;
  }

}
