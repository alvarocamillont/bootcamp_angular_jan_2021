import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { VisualizarProdutosComponent } from './visualizar-produtos.component';

describe('VisualizarProdutosComponent', () => {
  let component: VisualizarProdutosComponent;
  let fixture: ComponentFixture<VisualizarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizarProdutosComponent],
      imports: [PoTemplatesModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
