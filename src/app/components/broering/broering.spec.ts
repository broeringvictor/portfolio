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

  it('should set isEmailCopied to true and then false after copyEmail', (done) => {
    // Mock clipboard
    const writeTextSpy = spyOn(navigator.clipboard, 'writeText').and.returnValue(Promise.resolve());
    component.copyEmail();
    // Aguarda o Promise do clipboard
    setTimeout(() => {
      expect(component.isEmailCopied).toBe(true);
      setTimeout(() => {
        expect(component.isEmailCopied).toBe(false);
        done();
      }, 2100);
    }, 0);
    expect(writeTextSpy).toHaveBeenCalledWith('victorbroerings@gmail.com');
  });
});
