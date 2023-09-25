import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeGlassesComponent } from './eye-glasses.component';

describe('EyeGlassesComponent', () => {
  let component: EyeGlassesComponent;
  let fixture: ComponentFixture<EyeGlassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EyeGlassesComponent]
    });
    fixture = TestBed.createComponent(EyeGlassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
