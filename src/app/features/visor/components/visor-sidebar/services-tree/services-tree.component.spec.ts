import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTreeComponent } from './services-tree.component';

describe('ServicesTreeComponent', () => {
  let component: ServicesTreeComponent;
  let fixture: ComponentFixture<ServicesTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesTreeComponent]
    });
    fixture = TestBed.createComponent(ServicesTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
