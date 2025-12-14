import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavInternal } from './nav-internal';

describe('NavInternal', () => {
  let component: NavInternal;
  let fixture: ComponentFixture<NavInternal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavInternal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavInternal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
