import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { FormularioProdutosComponent } from './formulario-produtos.component';

describe('FormularioProdutosComponent', () => {
  let component: FormularioProdutosComponent;
  let fixture: ComponentFixture<FormularioProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioProdutosComponent],
      imports: [PoTemplatesModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
