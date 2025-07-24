import { TestBed } from '@angular/core/testing';
import { ContatosService } from './contatos.service';

describe('ContatosService', () => {
  let service: ContatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return contact items', () => {
    const items = service.getContactItems();
    expect(items.length).toBeGreaterThan(0);
    expect(items[0].text).toBeDefined();
  });
});
