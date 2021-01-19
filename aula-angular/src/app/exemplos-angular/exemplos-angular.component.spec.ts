import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplosAngularComponent } from './exemplos-angular.component';

describe('ExemplosAngularComponent', () => {
  let component: ExemplosAngularComponent;
  let fixture: ComponentFixture<ExemplosAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplosAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplosAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
