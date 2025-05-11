import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { USER } from 'app/profile/user.profile';
import { ScrollService } from 'app/shared/scroll.service';

const trimValues = (control: AbstractControl) => {
  if (!control.value.trim()) return { emptyString: true };
  return null;
}

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
  private  isSubmitting = signal(false);
  private scrollService = inject(ScrollService);
  element = viewChild.required<ElementRef>('scrollTo');

  form = new FormGroup({
       name: new FormControl('', { validators }),
      email: new FormControl('', { validators: [...validators, Validators.email] }),
    message: new FormControl('', { validators })
  });

  ngAfterViewInit() {
    this.scrollService.init('form', this.element());
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
      }
    })
  }
}
