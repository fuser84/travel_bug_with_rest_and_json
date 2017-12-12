import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Feedback, ContactType} from '../shared/feedback';


// add modules to manipulate DOM
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
// method for DOM manipulation
  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('h1').addEventListener('click', this.onClickHeading.bind(this));
    this.elementRef.nativeElement.querySelector('#bug').addEventListener('click', this.onClickBug.bind(this));
  }

  onClickHeading(e) {
    // debugger;
    if (e.target.classList.contains('animated')) {
      e.target.classList.remove('animated', 'tada');
      setTimeout(() => {e.target.classList.add('animated', 'tada'); }, 1);
    }else {
      e.target.classList.add('animated', 'tada');
    }
    console.log(e);
  }

  onClickBug(e) {
    // debugger;
    if (e.target.classList.contains('animated')) {
      e.target.classList.remove('animated', 'flip');
      setTimeout(() => {e.target.classList.add('animated', 'flip'); }, 1);
    }else {
      e.target.classList.add('animated', 'flip');
    }
    console.log(e);
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      telnum: [0, Validators.required],
      email: ['', Validators.required],
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

}
