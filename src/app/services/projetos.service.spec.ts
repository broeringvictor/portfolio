import { TestBed } from '@angular/core/testing';
import { ProjetosService } from './projetos.service';

describe('ProjetosService', () => {
  let service: ProjetosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return projetos', () => {
    const projetos = service.getProjetos();
    expect(projetos.length).toBeGreaterThan(0);
    expect(projetos[0].nome).toBeDefined();
  });
});
