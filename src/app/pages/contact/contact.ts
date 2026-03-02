import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private titleService: Title, private metaService: Meta) { }

  ngOnInit() {

    // Change Page Title
    this.titleService.setTitle(
      'Contact Us | Care2Data'
    );

    // Change Meta Description
    this.metaService.updateTag({
      name: 'og:description',
      content: 'Contact Care2Data for inquiries about clinical data validation software, KWALIFY™ support, and more.'
    });

    // Change Meta url
    this.metaService.updateTag({
      name: 'og:url',
      content: 'https://gokulgovindharaj.github.io/Care2Data-Website/#/contact-us'
    });

    // Change Keywords
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Contact Care2Data, Clinical data validation software inquiry, KWALIFY™ support, Clinical trial data validation questions, Request a demo of KWALIFY™, Clinical data validation consultation, Clinical research software contact, Clinical data integrity support, Clinical trial data validation assistance'
    });

    // Open Graph Title
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Contact Us | Care2Data'
    });

    // Open Graph Description
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Contact Care2Data for inquiries about clinical data validation software, KWALIFY™ support, and more.'
    });
    this.contactForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z ]+$')
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      organization: [''],
      interest: ['', Validators.required],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
