import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckPersonalPage } from './check-personal.page';

describe('CheckPersonalPage', () => {
  let component: CheckPersonalPage;
  let fixture: ComponentFixture<CheckPersonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
