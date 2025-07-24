import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Experiencia } from './experiencia';
import { ExperienciaService } from '../../services/experiencia.service';

describe('Experiencia', () => {
  let component: Experiencia;
  let fixture: ComponentFixture<Experiencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experiencia],
      providers: [ExperienciaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Experiencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have experiencias defined with at least one item', () => {
    expect(component.experiencias.length).toBeGreaterThan(0);
    expect(component.experiencias[0].cargo).toBeDefined();
    expect(component.experiencias[0].empresa).toBeDefined();
  });
});
