import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutableComponent } from './executable.component';

describe('ExecutableComponent', () => {
  let component: ExecutableComponent;
  let fixture: ComponentFixture<ExecutableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
