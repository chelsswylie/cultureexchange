import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Google API_KEY
  googleApiKey = 'AIzaSyDKHFCMQiqFcNERDDcHqqcHRvNqZdqCLQU';

  // Eventful API KEY
  eventApiKey = 'S7N4hXRm85fgzH7G';

  constructor(private http: HttpClient) {}

  getLocation() {
    const api = `https://maps.googleapis.com/maps/api/js?key=${this.googleApiKey}&callback=initMap`;
    // const api = 'https://ipapi.co/json/';
    return this.http.get(api);
  }

  getTranslation() {
    const api = 'https://translation.googleapis.com/$discovery/rest?version=v3';
    return this.http.get(api);
  }

  getEvent() {
    const api = `http://api.eventful.com/rest/events/search?app_key=${this.eventApiKey}&keyword=books&location=Michigan`;
    return this.http.get(api);
  }
}
