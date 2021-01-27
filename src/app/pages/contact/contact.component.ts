import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactUsComponent implements OnInit {
  constructor(private toastr: ToastrService) {}
  form: FormGroup;

  ngOnInit(): void {
    this.setupForm();
  }

  async sendEmail(e: Event) {
    if (this.form.valid) {
      try {
        await emailjs.sendForm('gmail', 'template_RQA1g4GY', e.target as HTMLFormElement, 'user_JpmzQ0zhBS3nqdcrtsm7Q');
        this.toastr.success('Sent With Success');
        this.form.reset();
      } catch (error) {}
    } else {
      this.toastr.error('You Cannot Do That');
      this.form.reset();
    }
  }

  private setupForm() {
    this.form = new FormGroup({
      name: new FormControl(''),
      subject: new FormControl(''),
      email: new FormControl('', Validators.email),
      message: new FormControl(''),
    });
  }
}
