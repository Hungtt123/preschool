import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsencefromComponent } from './absencefrom.component';

describe('AbsencefromComponent', () => {
  let component: AbsencefromComponent;
  let fixture: ComponentFixture<AbsencefromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsencefromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsencefromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
