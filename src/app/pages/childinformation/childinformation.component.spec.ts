import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildinformationComponent } from './childinformation.component';

describe('ChildinformationComponent', () => {
  let component: ChildinformationComponent;
  let fixture: ComponentFixture<ChildinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
