import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputListSkillsComponent } from './input-list-skills.component';

describe('InputListComponent', () => {
  let component: InputListSkillsComponent;
  let fixture: ComponentFixture<InputListSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputListSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputListSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
