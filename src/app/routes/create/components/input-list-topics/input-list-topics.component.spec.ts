import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputListTopicsComponent } from './input-list-topics.component';

describe('InputListComponent', () => {
  let component: InputListTopicsComponent;
  let fixture: ComponentFixture<InputListTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputListTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputListTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
