import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Loader, LoaderOptions } from 'google-maps';
// or const {Loader} = require('google-maps'); without typescript

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  location: any;
  translation: any;
  events: any;

  constructor(private apiService: ApiService) {
    this.apiService.getLocation().subscribe((data) => {
      this.location = data;
      console.log(this.location);
    });
    this.apiService.getTranslation().subscribe((data) => {
      this.translation = data;
      console.log(this.translation);
    });
  }
  async myFunction() {
    const options: LoaderOptions = {
      /* todo */
    };
    const loader = new Loader(
      'AIzaSyDKHFCMQiqFcNERDDcHqqcHRvNqZdqCLQU',
      options
    );

    const google = await loader.load();
    return new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

  ngOnInit(): void {
    this.apiService.getEvent().subscribe((data) => {
      this.events = data;
      console.log('data', JSON);
    });
    this.myFunction();
  }
}
