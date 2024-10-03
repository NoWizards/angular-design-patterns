import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayValComponent } from './display-val.component';

describe('DisplayValComponent', () => {
  let component: DisplayValComponent;
  let fixture: ComponentFixture<DisplayValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayValComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
