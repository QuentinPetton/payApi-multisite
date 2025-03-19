import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFormComponent } from './email-form.component';
import { By } from '@angular/platform-browser';

describe('EmailFormComponent', () => {
  let component: EmailFormComponent;
  let fixture: ComponentFixture<EmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should disable the submitButton if the email input is invalid', () => {
    const emailSubmitButton = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    expect(emailSubmitButton.disabled).toBeTrue();
  });
  it('should enable the submitButton if the email input is valid', () => {
    component.emailSubmitForm.setValue({ email: 'test@gmail.com' });
    fixture.detectChanges();
    const emailSubmitButton = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    expect(emailSubmitButton.disabled).toBeFalse();
});
  it('should set emailSent to true when the form is submitted', () => {
    component.emailSubmitForm.setValue({ email: 'test@gmail.com' });
    component.handleEmailFormSubmit();
    expect(component.emailSent()).toBeTrue();
  });
})
