import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { USER } from 'app/profile/user.profile';
import { ElementRefService } from 'app/shared/element.ref.service';

const trimValues = (control: AbstractControl) => {
  if (!control.value?.trim()) return { emptyString: true };
  return null;
}

// Validators.email is terrible. Custom logic is a must.
const validEmail = (control: AbstractControl) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!pattern.test(control.value)) return { email: true };
  return null;
};

const validators = [Validators.required, trimValues];

@Component({
     selector: 'app-contact-form',
      imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
     styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements AfterViewInit {
  private user = USER;
  private http = inject(HttpClient);
  private   isSubmitting = signal(false);
  private elementService = inject(ElementRefService);
  element = viewChild.required<ElementRef>('scrollTo');
  showToolTip = signal(false);

  form = new FormGroup({
       name: new FormControl('', { validators }),
      email: new FormControl('', { validators: [...validators, validEmail] }),
    message: new FormControl('', { validators })
  });

  ngAfterViewInit() {
    this.elementService.init('form', this.element());
  }

  private markSubmitted(formGroup: FormGroup) {
    for (const field in formGroup.controls) {
      const control = formGroup.get(field);
      control?.markAsTouched();
      control?.markAsDirty();
      if (control instanceof FormGroup) this.markSubmitted(control);
    }
  }

  onSubmit() {
    if (this.isSubmitting()) return;
    this.markSubmitted(this.form);
    if (this.form.invalid) return;
    this.isSubmitting.set(true);
    this.http.post(this.user.email, this.form.value).subscribe({
      next: (val) => {
        console.log('Your message was sent.');
        this.form.reset();
        this.isSubmitting.set(false);
        this.showToolTip.set(true);
        setTimeout(() => this.showToolTip.set(false), 3000);
      },
       error: ({ error }) => { // formspring errors have heavy nesting
        console.error('HELLO! Form submission failed', error.errors);
        this.isSubmitting.set(false);
      }
    })
  }
}
