import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Projetos } from './projetos';
import { ProjetosService } from '../../services/projetos.service';

describe('Projetos', () => {
  let component: Projetos;
  let fixture: ComponentFixture<Projetos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projetos],
      providers: [ProjetosService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projetos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have projetos defined with at least one item', () => {
    expect(component.projetos.length).toBeGreaterThan(0);
    expect(component.projetos[0].nome).toBeDefined();
    expect(component.projetos[0].tecnologias.length).toBeGreaterThan(0);
  });
});
