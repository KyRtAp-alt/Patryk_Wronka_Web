import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Com2Component } from './com2.component';

describe('Com2Component', () => {
  let component: Com2Component;
  let fixture: ComponentFixture<Com2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Com2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Com2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
