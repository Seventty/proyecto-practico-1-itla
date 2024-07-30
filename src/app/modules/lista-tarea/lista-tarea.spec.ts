import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTareaComponent } from './lista-tarea.component';
import { TareaService } from '@shared/services/tarea-service/TareaService.service';
import { ModalComponent } from '@shared/components/modal-component/modal-component.component';
import { of } from 'rxjs'; // Importa `of` para crear un observable mock
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListaTareaComponent', () => {
  let component: ListaTareaComponent;
  let fixture: ComponentFixture<ListaTareaComponent>;
  let mockTareaService: any;

  beforeEach(async () => {
    // Crea un espía para el servicio TareaService
    mockTareaService = jasmine.createSpyObj('TareaService', ['getTareas']);

    await TestBed.configureTestingModule({
      declarations: [ ListaTareaComponent, ModalComponent ],
      providers: [
        { provide: TareaService, useValue: mockTareaService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTareaComponent);
    component = fixture.componentInstance;

    // Configura el espía para que devuelva un observable con tareas mock
    mockTareaService.getTareas.and.returnValue(of([
      { id: 1, descripcion: 'Tarea 1', completada: false },
      { id: 2, descripcion: 'Tarea 2', completada: true }
    ]));

    fixture.detectChanges(); // Detecta los cambios iniciales
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load tasks on init', () => {
    // Ejecuta la inicialización del componente
    component.ngOnInit();
    fixture.detectChanges(); // Asegúrate de que los cambios se reflejen

    // Verifica que la colección de tareas se haya cargado correctamente
    expect(component.tareaCollection.length).toBe(2);
    expect(component.tareaCollection[0].descripcion).toBe('Tarea 1');
    expect(component.tareaCollection[1].descripcion).toBe('Tarea 2');
  });

  it('should open the modal', () => {
    // Crea un espía para el componente ModalComponent
    component.agregarTareaModal = jasmine.createSpyObj('ModalComponent', ['open']);
    component.openTareaModal();

    // Verifica que se haya llamado al método open del componente modal
    if(component.agregarTareaModal) expect(component.agregarTareaModal.open).toHaveBeenCalled();
  });
});
