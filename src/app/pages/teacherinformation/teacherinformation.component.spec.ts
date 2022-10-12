import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherinformationComponent } from './teacherinformation.component';

describe('TeacherinformationComponent', () => {
  let component: TeacherinformationComponent;
  let fixture: ComponentFixture<TeacherinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
