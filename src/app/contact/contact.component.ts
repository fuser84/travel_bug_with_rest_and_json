import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Feedback, ContactType} from '../shared/feedback';


// add modules to manipulate DOM
import {AfterViewInit, ElementRef} from '@angular/core';
import {visibility, flyInOut, expand} from '../animations/app.animation';
import {FeedbackService} from '../services/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block;'
  },
  animations: [
    visibility(),
    flyInOut(),
    expand()
  ]
})

export class ContactComponent implements OnInit, AfterViewInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  preview = null;
  spinnerStatus = true;
  formStatus = true;
  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'Firstname is required',
      'minlength': 'First Name must be 2 characters log',
      'maxlength': `only 25 characters are allowed`,
    },
    'lastname': {
      'required': 'Lastname is required',
      'minlength': 'Last Name must be 2 characters log',
      'maxlength': `only 25 characters are allowed`,
    },
    'telnum': {
      'required': 'Telnum is required',
      'pattern': 'Telnum must contain only numbers',
      'minlength': `Telnum can't be less than 2 digits`,
      'maxlength': `Telnum can't be more than 10 digits`
    },
    'email': {
      'required': 'Email is required',
      'email': 'Email not in valid format'
    }
  };

  lat: number = 25.774948;
  lng: number = -80.179100;

  // header = document.querySelectorAll('h1')[1];


  constructor(private fb: FormBuilder, private elementRef: ElementRef, private feedbackService: FeedbackService) {
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
      setTimeout(() => {
        e.target.classList.add('animated', 'tada');
      }, 0.000000001);
    } else {
      e.target.classList.add('animated', 'tada');
    }
    console.log(e);
  }

  onClickBug(e) {
    // debugger;
    if (e.target.classList.contains('animated')) {
      e.target.classList.remove('animated', 'flip');
      setTimeout(() => {
        e.target.classList.add('animated', 'flip');
      }, 0.00000001);
    } else {
      e.target.classList.add('animated', 'flip');
    }
    console.log(e);
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: [0, [Validators.required, Validators.pattern('[0-9]{1,10}'), Validators.minLength(2),
        Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackForm.valueChanges
      .subscribe(data => {
        this.onValueChanged(data);
        console.log(data);
      });

    this.onValueChanged(); // (re)set form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) {
      return;
    }
    const form = this.feedbackForm;
    // console.log(form);

    for (const field in this.formErrors) {
      // if there will be no parameters form will be cleared
      this.formErrors[field] = '';
      // via "get" we get access to the form field value
      const control = form.get(field);
      // console.log(control);
      // if control is not empty and the content is invalid => use error messages
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          // key is the name of the error => (required, minlength, maxlength)
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.formStatus = false;
    this.spinnerStatus = false;
    this.feedback = this.feedbackForm.value;

    this.feedbackService.submitFeedBack(this.feedback)
      .subscribe(feedback => {
        this.preview = feedback;
        this.spinnerStatus = true;
      });
    console.log(this.feedback);

    setTimeout(() => {
      this.formStatus = true;
      this.preview = null;
    }, 5000);

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
