import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  plants = [
    { name: 'Plant 1', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)' },
    { name: 'Plant 2', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)' },
    { name: 'Plant 3', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)' },
    { name: 'Plant 4', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)' }
  ];

  constructor() {}

}
