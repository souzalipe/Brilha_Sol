import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  plants = [
    { name: 'Plant 1', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)', image: '../../assets/placa.png' },
    { name: 'Plant 2', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)', image: '../../assets/placa2.png' },
    { name: 'Plant 3', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)', image: '../../assets/placa3.png' },
    { name: 'Plant 4', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)', image: '../../assets/placa4.png' },
    { name: 'Plant 1', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)', image: '../../assets/placa5.png' },
    { name: 'Plant 2', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)', image: '../../assets/manocristalino.jpg' },
    { name: 'Plant 3', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)', image: '../../assets/policristalino.png' },
    { name: 'Plant 4', location: 'Kazhakootam', status: 'Active', capacity: '1300 (kWp)', image: '../../assets/maps.webp' }
  ];

  constructor() {}

}
