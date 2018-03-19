import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionAppComponent } from './exception-app.component';

describe('ExceptionAppComponent', () => {
  let component: ExceptionAppComponent;
  let fixture: ComponentFixture<ExceptionAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceptionAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
