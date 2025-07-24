import { TestBed } from '@angular/core/testing';
import { ExperienciaService } from './experiencia.service';

describe('ExperienciaService', () => {
  let service: ExperienciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return experiencias', () => {
    const experiencias = service.getExperiencias();
    expect(experiencias.length).toBeGreaterThan(0);
    expect(experiencias[0].cargo).toBeDefined();
  });
});
