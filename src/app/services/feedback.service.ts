import {Injectable} from '@angular/core';
import {Restangular} from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { Feedback } from '../shared/feedback';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) {
  }

  submitFeedBack(form): Observable <Feedback> {
    return this.restangular.all('feedback').post(form);
  }

}
