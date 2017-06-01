import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassDetailsComponent } from './view-class-details.component';

describe('ViewClassDetailsComponent', () => {
  let component: ViewClassDetailsComponent;
  let fixture: ComponentFixture<ViewClassDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClassDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
