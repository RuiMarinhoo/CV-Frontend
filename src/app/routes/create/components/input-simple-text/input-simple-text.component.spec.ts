import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSimpleTextComponent } from './input-simple-text.component';

describe('InputTextComponent', () => {
  let component: InputSimpleTextComponent;
  let fixture: ComponentFixture<InputSimpleTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSimpleTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSimpleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
