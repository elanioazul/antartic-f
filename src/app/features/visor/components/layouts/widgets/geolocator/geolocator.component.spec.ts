import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocatorComponent } from './geolocator.component';

describe('GeolocatorComponent', () => {
  let component: GeolocatorComponent;
  let fixture: ComponentFixture<GeolocatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeolocatorComponent]
    });
    fixture = TestBed.createComponent(GeolocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
