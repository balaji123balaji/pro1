import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventBpm1Component } from './advent-bpm1.component';

describe('AdventBpm1Component', () => {
  let component: AdventBpm1Component;
  let fixture: ComponentFixture<AdventBpm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventBpm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventBpm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
