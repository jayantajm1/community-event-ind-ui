import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  submitForm() {
    console.log('Contact form submitted:', this.contact);
    alert('Thank you for your message! We will get back to you soon.');
  }
}
