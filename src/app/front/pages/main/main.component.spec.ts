import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontMainComponent } from './main.component';

describe('MainComponent', () => {
  let component: FrontMainComponent;
  let fixture: ComponentFixture<FrontMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
