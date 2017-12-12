import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Feedback, ContactType} from '../shared/feedback';
import { AfterViewInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit, AfterViewInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;

  lat: number = 25.774948;
  lng: number = -80.179100;

  // header = document.querySelectorAll('h1')[1];


  constructor(private fb: FormBuilder, private elementRef: ElementRef) {
    this.createForm();
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('h1').addEventListener('click', this.onClick.bind(this));
  }
  onClick(e) {
    if (e.target.classList.contains('animated')) {
      return  e.target.classList.remove('animated', 'bounce');
      // setTimeout(() => {e.target.classList.add('animated', 'bounce'); }, 10000);
    }
    e.target.classList.add('animated', 'bounce');
    // e.target.classList.remove('animated', 'bounce');
    console.log(e);
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }

}
