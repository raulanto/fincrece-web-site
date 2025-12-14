import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollFeatures } from './scroll-features';

describe('ScrollFeatures', () => {
  let component: ScrollFeatures;
  let fixture: ComponentFixture<ScrollFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
