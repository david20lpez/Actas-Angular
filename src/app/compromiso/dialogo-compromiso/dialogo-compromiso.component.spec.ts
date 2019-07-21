import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoCompromisoComponent } from './dialogo-compromiso.component';

describe('DialogoCompromisoComponent', () => {
  let component: DialogoCompromisoComponent;
  let fixture: ComponentFixture<DialogoCompromisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoCompromisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoCompromisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
