import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjiznicaComponent } from './knjiznica.component';

describe('KnjiznicaComponent', () => {
  let component: KnjiznicaComponent;
  let fixture: ComponentFixture<KnjiznicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnjiznicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnjiznicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
