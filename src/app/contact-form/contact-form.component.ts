import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
     selector: 'app-contact-form',
      imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
     styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  form = new FormGroup({
       name: new FormControl(),
      email: new FormControl(),
    message: new FormControl()
  });

  onSubmit() {
    console.log(this.form);
  }
}
