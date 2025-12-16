import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComsumoEmpresarial } from './comsumo-empresarial';

describe('ComsumoEmpresarial', () => {
  let component: ComsumoEmpresarial;
  let fixture: ComponentFixture<ComsumoEmpresarial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComsumoEmpresarial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComsumoEmpresarial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
