import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputListIconsComponent } from './input-list-icons.component';

describe('InputListComponent', () => {
  let component: InputListIconsComponent;
  let fixture: ComponentFixture<InputListIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputListIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputListIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
