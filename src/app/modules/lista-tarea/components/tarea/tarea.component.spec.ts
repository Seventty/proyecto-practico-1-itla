/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TareaComponent } from './tarea.component';

describe('TareaComponent', () => {
  let component: TareaComponent;
  let fixture: ComponentFixture<TareaComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ TareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
