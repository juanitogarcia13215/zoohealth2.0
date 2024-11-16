import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcografiasPage } from './ecografias.page';

describe('EcografiasPage', () => {
  let component: EcografiasPage;
  let fixture: ComponentFixture<EcografiasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EcografiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
