import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRedirectComponent } from './second-redirect.component';

describe('SecondRedirectComponent', () => {
  let component: SecondRedirectComponent;
  let fixture: ComponentFixture<SecondRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondRedirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
