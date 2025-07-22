import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Broering } from './broering';

describe('Broering', () => {
  let component: Broering;
  let fixture: ComponentFixture<Broering>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Broering]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Broering);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
