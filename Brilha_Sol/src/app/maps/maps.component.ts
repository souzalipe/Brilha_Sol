import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  latitude: number = -23.55052;
  longitude: number = -46.633308;

  constructor(private modalController: ModalController) { }

  ngOnInit(): void {
    this.openMaps();
  }

  openMaps(): void {
    const url = `https://www.google.com/maps/search/placas+solares/@${this.latitude},${this.longitude},15z`;
    window.open(url, '_blank'); 
  }

  
  closeModal(): void {
    this.modalController.dismiss();
  }
}
