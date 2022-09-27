import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdmimComponent } from './login-admim.component';

describe('LoginAdmimComponent', () => {
  let component: LoginAdmimComponent;
  let fixture: ComponentFixture<LoginAdmimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAdmimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAdmimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
