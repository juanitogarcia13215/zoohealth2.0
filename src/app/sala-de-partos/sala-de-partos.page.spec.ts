import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalaDePartosPage } from './sala-de-partos.page';

describe('SalaDePartosPage', () => {
  let component: SalaDePartosPage;
  let fixture: ComponentFixture<SalaDePartosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaDePartosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
