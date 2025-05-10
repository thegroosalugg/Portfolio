import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { USER } from 'app/profile/user.profile';

@Component({
     selector: 'app-contact-form',
      imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
     styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  private user = USER;
  private http = inject(HttpClient);
  form = new FormGroup({
       name: new FormControl(),
      email: new FormControl(),
    message: new FormControl()
  });

  onSubmit() {
    console.log(this.form.value);
    this.http.post(this.user.email, this.form.value).subscribe({
      next: (val) => console.log(val)
    })
  }
}
