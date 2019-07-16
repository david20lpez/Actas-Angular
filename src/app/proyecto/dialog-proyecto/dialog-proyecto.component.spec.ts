import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProyectoComponent } from './dialog-proyecto.component';

describe('DialogProyectoComponent', () => {
  let component: DialogProyectoComponent;
  let fixture: ComponentFixture<DialogProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
