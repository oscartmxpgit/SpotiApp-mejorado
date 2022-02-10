import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumboxComponent } from './albumbox.component';

describe('AlbumboxComponent', () => {
  let component: AlbumboxComponent;
  let fixture: ComponentFixture<AlbumboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
