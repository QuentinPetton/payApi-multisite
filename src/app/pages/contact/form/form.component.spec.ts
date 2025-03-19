import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should disable the submitButton if the form is invalid', () => {
    const submitButton = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    expect(submitButton.disabled).toBeTrue();
  });
  it('should enable the submitButton if the form is valid', () => {
    component.submitForm.setValue({ name: 'John Doe', companyName: "", title:"", message:"", email: 'test@gmail.com', terms: true });
    fixture.detectChanges();
    const submitButton = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    expect(submitButton.disabled).toBeFalse();
  }
  );
  it('should set formSent to true when the form is submitted', () => {
    component.submitForm.setValue({ name: 'John Doe', companyName: "", title:"", message:"", email: 'test@gmail.com', terms: true });
    component.onSubmit();
    expect(component.formSent()).toBeTrue();
  }
  );
});
