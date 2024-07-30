import { Component, Input, OnInit } from '@angular/core';
import { TareaService } from '@shared/services/tarea-service/TareaService.service';

@Component({
  selector: 'tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  /**
   * ID de la tarea
   * @type {number}
   */
  @Input() id: number = 0;

  /**
   * Descripción de la tarea
   * @type {string}
   */
  @Input() descripcion: string = "";

  /**
   * Estado de completitud de la tarea
   * @type {boolean}
   */
  @Input() completada: boolean = false;

  /**
   * Inyección del servicio de tareas en el constructor
   * @param {TareaService} tareaService - Servicio para gestionar tareas
   */
  constructor(private tareaService: TareaService) { }

  /**
   * Inicialización del componente
   */
  ngOnInit() {
  }

  /**
   * Marca la tarea como completada
   * @param {number} id - ID de la tarea a marcar como completada
   */
  completarTarea(id: number) {
    this.tareaService.marcarCorregido(id);
  }
}
