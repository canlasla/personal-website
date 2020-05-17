import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhacksComponent } from './newhacks.component';

describe('NewhacksComponent', () => {
  let component: NewhacksComponent;
  let fixture: ComponentFixture<NewhacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewhacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewhacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
