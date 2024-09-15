import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  plants = [
    { name: 'Plant 1', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)', image: '../../assets/filme fino.webp' },
    { name: 'Plant 2', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)', image: '../../assets/manocristalino.jpg' },
    { name: 'Plant 3', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)', image: '../../assets/policristalino.png' },
    { name: 'Plant 1', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)', image: '../../assets/filme fino.webp' },
    { name: 'Plant 2', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)', image: '../../assets/manocristalino.jpg' },
    { name: 'Plant 3', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)', image: '../../assets/policristalino.png' },
  
  ];

  constructor() {}

}
