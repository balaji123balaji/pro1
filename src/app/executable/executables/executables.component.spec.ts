import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutablesComponent } from './executables.component';

describe('ExecutablesComponent', () => {
  let component: ExecutablesComponent;
  let fixture: ComponentFixture<ExecutablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
