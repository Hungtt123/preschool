import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassinformationComponent } from './classinformation.component';

describe('ClassinformationComponent', () => {
  let component: ClassinformationComponent;
  let fixture: ComponentFixture<ClassinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
