import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBadgeComponent } from './student-badge.component';

describe('StudentBadgeComponent', () => {
  let component: StudentBadgeComponent;
  let fixture: ComponentFixture<StudentBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
