import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LimpiezaBucalPage } from './limpieza-bucal.page';

describe('LimpiezaBucalPage', () => {
  let component: LimpiezaBucalPage;
  let fixture: ComponentFixture<LimpiezaBucalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpiezaBucalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
