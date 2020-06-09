import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../app/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Google API KEY
googleApiKey = 'AIzaSyDKHFCMQiqFcNERDDcHqqcHRvNqZdqCLQU';

// Ticketmaster API KEY
eventApiKey = 'ZL1Y7N3SNRvR8ISGiM6GE8FrbYErNAV7';

// DATABASE API URL
dbApiUrl = "http://localhost:3000/api/CultureExchange";


  constructor(private http: HttpClient) { }

  getLocation() {
    const api = `https://maps.googleapis.com/maps/api/js?key=${this.googleApiKey}&callback=initMap`
    return this.http.get(api);
}

  getTranslation() {
    const api = 'https://translation.googleapis.com/$discovery/rest?version=v3';
    return this.http.get(api);
  }

  getEvent() {
    const api = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${this.eventApiKey}`;
    return this.http.get(api);
  }

  getDataBase(): Observable<Data[]> {
    return this.http.get<Data[]>(this.dbApiUrl);
  }
}
