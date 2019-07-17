import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActDialogComponent } from './act-dialog.component';

describe('ActDialogComponent', () => {
  let component: ActDialogComponent;
  let fixture: ComponentFixture<ActDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
