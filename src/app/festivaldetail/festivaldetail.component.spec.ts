import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivaldetailComponent } from './festivaldetail.component';

describe('FestivaldetailComponent', () => {
  let component: FestivaldetailComponent;
  let fixture: ComponentFixture<FestivaldetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivaldetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivaldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
