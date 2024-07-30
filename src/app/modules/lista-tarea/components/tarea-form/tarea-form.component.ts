import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TareaService } from '@shared/services/tarea-service/TareaService.service';
import { ModalComponent } from '@shared/components/modal-component/modal-component.component';

@Component({
  selector: 'tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent implements OnInit {
  /**
   * Referencia al componente modal
   * @type {ModalComponent | undefined}
   */
  @Input() modalReference?: ModalComponent

  /**
   * Formulario de tarea
   * @type {FormGroup}
   */
  tareaForm: FormGroup = new FormGroup({});

  /**
   * Inyección del FormBuilder y TareaService en el constructor
   * @param {FormBuilder} fb - Constructor para formularios reactivos
   * @param {TareaService} tareaService - Servicio para gestionar tareas
   */
  constructor(private fb: FormBuilder, private tareaService: TareaService) {
    // Inicialización del formulario de tarea
    this.tareaForm = this.fb.group({
      id: 0,
      descripcion: ['', Validators.required],
      completada: false
    });
  }

  /**
   * Crea una nueva tarea si el formulario es válido,
   * reinicia el formulario y cierra el modal
   */
  nuevaTarea() {
    if (this.tareaForm.valid) {
      this.tareaService.nuevaTarea(this.tareaForm.value);
      this.tareaForm.reset();
      this.modalReference?.close();
    }
  }

  /**
   * Inicialización del componente
   */
  ngOnInit(): void {
  }
}
