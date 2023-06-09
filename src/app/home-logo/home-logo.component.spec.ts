import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLogoComponent } from './home-logo.component';

describe('HomeLogoComponent', () => {
  let component: HomeLogoComponent;
  let fixture: ComponentFixture<HomeLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLogoComponent]
    });
    fixture = TestBed.createComponent(HomeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
