import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfaceDeUsuatioPage } from './interface-de-usuatio.page';

describe('InterfaceDeUsuatioPage', () => {
  let component: InterfaceDeUsuatioPage;
  let fixture: ComponentFixture<InterfaceDeUsuatioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceDeUsuatioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
