import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal-component/modal-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalComponent
   ],
  exports: [
    ModalComponent
  ]
})
export class SharedModule { }
