// src/app/core/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ENV } from './env.config';
import { AuthService } from '../auth/auth.service';
import { EventModel } from './models/event.model';
import { RsvpModel } from './models/rsvp.model';


@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  // GET list of public, future events
  getEvents$(): Observable<EventModel[]> {
    return this.http
      .get(`${ENV.BASE_API}events/`)
      // .map(this._handleSuccess)
      .catch(this._handleError);
  }

  // GET all events - private and public (admin only)
  getAdminEvents$(): Observable<EventModel[]> {
    return this.http
      .get(`${ENV.BASE_API}events/admin/`)
      // .map(this._handleSuccess)
      .catch(this._handleError);
  }

  // GET an event by ID (login required)
  getEventById$(id: string): Observable<EventModel> {
    return this.http
      .get(`${ENV.BASE_API}event/${id}/`)
      // .map(this._handleSuccess)
      .catch(this._handleError);
  }

  // GET RSVPs by event ID (login required)
  getRsvpsByEventId$(eventId: string): Observable<RsvpModel[]> {
    return this.http
      .get(`${ENV.BASE_API}event/${eventId}/rsvps/`)
      // .map(this._handleSuccess)
      .catch(this._handleError);
  }

  // POST new event (admin only)
  postEvent$(event: EventModel): Observable<EventModel> {
    return this.http
      .post(`${ENV.BASE_API}event/new`, event)
      .map(this._handleSuccess)
      .catch(this._handleError);
  }

  // PUT existing event (admin only)
  editEvent$(id: string, event: EventModel): Observable<EventModel> {
    return this.http
      .put(`${ENV.BASE_API}event/${id}`, event)
      .map(this._handleSuccess)
      .catch(this._handleError);
  }

  // DELETE existing event and all associated RSVPs (admin only)
  deleteEvent$(id: string): Observable<any> {
    return this.http
      .delete(`${ENV.BASE_API}event/${id}`)
      .map(this._handleSuccess)
      .catch(this._handleError);
  }

  // POST new RSVP (login required)
  postRsvp$(rsvp: RsvpModel): Observable<RsvpModel> {
    return this.http
      .post(`${ENV.BASE_API}rsvp/new`, rsvp)
      // .map(this._handleSuccess)
      .catch(this._handleError);
  }

  // PUT existing RSVP (login required)
  editRsvp$(id: string, rsvp: RsvpModel): Observable<RsvpModel> {
    return this.http
      .put(`${ENV.BASE_API}rsvp/${id}`, rsvp)
      // .map(this._handleSuccess)
      .catch(this._handleError);
  }

  private _handleSuccess(res: HttpResponse<any>) {
    return res;
  }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.auth.login();
    }

    return Observable.throw(err);
  }

}
