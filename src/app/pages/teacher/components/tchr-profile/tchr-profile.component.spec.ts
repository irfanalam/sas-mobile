import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TchrProfileComponent } from './tchr-profile.component';

describe('TchrProfileComponent', () => {
  let component: TchrProfileComponent;
  let fixture: ComponentFixture<TchrProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TchrProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TchrProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
