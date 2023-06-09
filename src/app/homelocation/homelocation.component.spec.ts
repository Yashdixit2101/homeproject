import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelocationComponent } from './homelocation.component';

describe('HomelocationComponent', () => {
  let component: HomelocationComponent;
  let fixture: ComponentFixture<HomelocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomelocationComponent]
    });
    fixture = TestBed.createComponent(HomelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
