import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseNumberComponent } from './reverse-number.component';

describe('ReverseNumberComponent', () => {
  let component: ReverseNumberComponent;
  let fixture: ComponentFixture<ReverseNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
