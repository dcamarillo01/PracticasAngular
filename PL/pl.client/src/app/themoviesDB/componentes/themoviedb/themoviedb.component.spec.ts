import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemoviedbComponent } from './themoviedb.component';

describe('ThemoviedbComponent', () => {
  let component: ThemoviedbComponent;
  let fixture: ComponentFixture<ThemoviedbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemoviedbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemoviedbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
