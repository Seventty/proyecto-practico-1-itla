import { Component, OnInit, ViewChild } from '@angular/core';
import { ITarea } from '@shared/interfaces/ITarea';
import { TareaService } from '@shared/services/tarea-service/TareaService.service';
import { IModalConfig } from '@shared/interfaces/IModalConfig';
import { IModalOption } from '@shared/interfaces/IModalOptions';
import { ModalComponent } from '@shared/components/modal-component/modal-component.component';

@Component({
  selector: 'lista-tarea',
  templateUrl: './lista-tarea.component.html',
  styleUrls: ['./lista-tarea.component.css']
})
export class ListaTareaComponent implements OnInit {
  /**
   * Referencia al componente modal para agregar tareas
   * @type {ModalComponent | undefined}
   */
  @ViewChild("agregarTareaModal") agregarTareaModal?: ModalComponent

  /**
   * Configuración del modal para agregar una nueva tarea
   * @type {IModalConfig}
   */
  tareaModalConfig: IModalConfig = {
    modalTitle: 'Agregar Nueva Tarea',
    dashboardHeader: true
  }

  /**
   * Opciones del modal (centrado y tamaño)
   * @type {IModalOption}
   */
  tareaModalOption: IModalOption = {
    centered: true,
    size: 'md'
  }

  /**
   * Colección de tareas
   * @type {Array<ITarea>}
   */
  tareaCollection: Array<ITarea> = [];

  /**
   * Inyección del servicio de tareas en el constructor
   * @param {TareaService} tareasService - Servicio para gestionar tareas
   */
  constructor(private tareasService: TareaService) { }

  /**
   * Inicialización del componente
   * Suscripción al observable que obtiene las tareas del servicio
   */
  ngOnInit() {
    this.tareasService.getTareas.subscribe((res: Array<ITarea>) => {
      this.tareaCollection = res;
    })
  }

  /**
   * Método para abrir el modal de agregar tarea
   */
  openTareaModal() {
    this.agregarTareaModal?.open();
  }
}
