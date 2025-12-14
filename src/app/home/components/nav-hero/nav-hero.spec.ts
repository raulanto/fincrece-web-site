import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHero } from './nav-hero';

describe('NavHero', () => {
  let component: NavHero;
  let fixture: ComponentFixture<NavHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
