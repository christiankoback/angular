import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestspageComponent } from './interestspage.component';

describe('InterestspageComponent', () => {
  let component: InterestspageComponent;
  let fixture: ComponentFixture<InterestspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
