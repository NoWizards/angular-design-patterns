import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentProgressComponent } from './parent-progress.component';

describe('ParentProgressComponent', () => {
  let component: ParentProgressComponent;
  let fixture: ComponentFixture<ParentProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
