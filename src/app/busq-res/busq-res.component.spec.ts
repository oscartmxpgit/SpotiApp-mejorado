import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqResComponent } from './busq-res.component';

describe('BusqResComponent', () => {
  let component: BusqResComponent;
  let fixture: ComponentFixture<BusqResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
