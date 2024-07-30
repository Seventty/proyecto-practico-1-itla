import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTareaComponent } from './lista-tarea.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { TareaStatusPipe } from '../../shared/status-pipe/tarea-status-pipe.pipe';
import { SharedModule } from '../../shared/shared.module';
import { TareaFormComponent } from './components/tarea-form/tarea-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [ListaTareaComponent, TareaComponent, TareaStatusPipe, TareaFormComponent],
  exports: [ListaTareaComponent, TareaComponent]
})
export class ListaTareaModule { }
