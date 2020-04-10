import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSkillsFormComponent } from './main-skills-form.component';

describe('MainSkillsFormComponent', () => {
  let component: MainSkillsFormComponent;
  let fixture: ComponentFixture<MainSkillsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSkillsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSkillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
