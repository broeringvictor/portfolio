import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contatos } from './contatos';

describe('Contatos', () => {
  let component: Contatos;
  let fixture: ComponentFixture<Contatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contatos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contatos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have contactItems defined with at least one item', () => {
    expect(component.contactItems.length).toBeGreaterThan(0);
    expect(component.contactItems[0].text).toBeDefined();
    expect(component.contactItems[0].href).toBeDefined();
  });
});
