import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckGeneralPage } from './check-general.page';

describe('CheckGeneralPage', () => {
  let component: CheckGeneralPage;
  let fixture: ComponentFixture<CheckGeneralPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
