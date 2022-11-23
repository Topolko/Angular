import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizBuzzComponent } from './fiz-buzz.component';

describe('FizBuzzComponent', () => {
  let component: FizBuzzComponent;
  let fixture: ComponentFixture<FizBuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizBuzzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FizBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
