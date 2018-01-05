import {Component, OnInit, Inject} from '@angular/core';
import {Festival} from '../shared/festival';
// two imports below enable routing by id between festival details
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {FestivalService} from '../services/festival.service';

import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {CommentLink} from '../shared/commentLink';

import {MatSnackBar} from '@angular/material';

import 'rxjs/add/operator/switchMap';
import {flyInOut, visibility, expand} from '../animations/app.animation';

@Component({
  selector: 'app-festivaldetail',
  templateUrl: './festivaldetail.component.html',
  styleUrls: ['./festivaldetail.component.scss'],
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
export class FestivaldetailComponent implements OnInit {
  // fetch info from another component using Input
  // @Input()
  festival: Festival;
  festivalcopy = null;
  festivalIds: number[];
  prev: number;
  next: number;
  errMess: string;
  visibility = 'shown';

  submitForm: FormGroup;
  comment: CommentLink;
  formErrors = {
    'author': '',
    'comment': '',
  };

  validationMessages = {
    'author': {
      'required': 'Author Name is required.',
      'minlength': 'First Name must be at least 2 characters long.',
    },
    'comment': {
      'required': 'Comment is required.',
    }
  };


  constructor(private festivalservice: FestivalService,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder,
              public snackBar: MatSnackBar,
              @Inject('BaseURL') private BaseURL) {
    this.createForm();
  }

  ngOnInit() {
    this.festivalservice.getFestivalIds()
      .subscribe(festivalIds => this.festivalIds = festivalIds, errmess => this.errMess = <any>errmess);
    // fetch info from the params
    this.route.params
      .switchMap((params: Params) => { this.visibility = 'hidden'; return this.festivalservice.getFestival(+params['id']); })
      .subscribe(festival => {
        this.festival = festival;
        this.festivalcopy = festival;
        this.setPrevNext(festival.id);
        this.visibility = 'shown';
      }, errmess => this.errMess = <any>errmess);
  }

  setPrevNext(festivalId: number) {
    let index = this.festivalIds.indexOf(festivalId);
    this.prev = this.festivalIds[(this.festivalIds.length + index - 1) % this.festivalIds.length];
    this.next = this.festivalIds[(this.festivalIds.length + index + 1) % this.festivalIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.submitForm = this.fb.group({
      // validators should be passed in array or the error can be occur ==>Expected validator to return Promise or Observable
      author: ['', [Validators.required, Validators.minLength(2)]],
      rating: 5,
      comment: ['', Validators.required]
    });
    this.submitForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // re(set) form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.submitForm) {
      return;
    }
    const form = this.submitForm;

    for (const field in this.formErrors) {
      // if there will be no parameters form will be cleared
      this.formErrors[field] = '';
      // via "get" we get access to the form field value
      const control = form.get(field);
      // if control is not empty and the content is invalid => use error messages
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          // key is the name of the error => (required, minlength)
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }

  }

  onSubmit() {
    let date = new Date().toISOString();
    this.submitForm.value.date = date;
    this.comment = this.submitForm.value;
    this.festivalcopy.comments.push(this.comment);
    this.festivalcopy.save()
      .subscribe(festival => this.festival = festival);
    console.log(this.comment);
    this.submitForm.reset({
      author: '',
      rating: 5,
      comment: ''
    });
  }

  openSnackBar() {
    this.snackBar.open(`Festival has been liked!`, `OK!`, {
      duration: 2000
    });
  }

  openSnackBar2() {
    this.snackBar.open(`Added to the favorites!`, `OK!`, {
      duration: 2000
    });
  }

}
