import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyInfoValComponent } from './lazy-info-val.component';

describe('LazyInfoValComponent', () => {
  let component: LazyInfoValComponent;
  let fixture: ComponentFixture<LazyInfoValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyInfoValComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyInfoValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
