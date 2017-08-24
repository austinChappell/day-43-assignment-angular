import { Component } from '@angular/core';
import earthquakes from '../data/earthquakes';
// import moment from 'moment';

const earthquakeData = earthquakes.features;
console.log(earthquakeData);

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div class="container-fluid">
    <div class="App">
      <div class="title">
        <div class="my-header">Earthquakes!</div>
      </div>
      <div class="earthquake-title">
        This is a list of 8 earthquakes occurring on the morning of July 14th across the United States.
      </div>
      <div class="row">
        <div *ngFor="let quake of earthquakeData" class="col-sm-6">
          <div class="card">
            <div class="card-block">
              <h4 class="card-title">{{quake.properties.title}}</h4>
              <h6 class="card-subtitle mb-2 text-muted">Magnitude: {{quake.properties.mag}}</h6>
              <h6 class="card-subtitle mb-2 text-muted">Time: </h6>
              <p class="card-text">Coordinates: {{quake.geometry.coordinates.join(', ')}}</p>
              <a href="{{quake.properties.url}}">USGS Events Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})
export class AppComponent {
  title = 'app';
  earthquakeData = earthquakeData;
}
