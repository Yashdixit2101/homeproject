import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCatComponent } from './home-cat.component';

describe('HomeCatComponent', () => {
  let component: HomeCatComponent;
  let fixture: ComponentFixture<HomeCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCatComponent]
    });
    fixture = TestBed.createComponent(HomeCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
