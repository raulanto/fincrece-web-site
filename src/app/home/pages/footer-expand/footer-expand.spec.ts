import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterExpand } from './footer-expand';

describe('FooterExpand', () => {
  let component: FooterExpand;
  let fixture: ComponentFixture<FooterExpand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterExpand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterExpand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
