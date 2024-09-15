import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  latitude: number = 0;
  longitude: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  openMaps(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;

        const url = `https://www.google.com/maps/search/painel+solar/@${this.latitude},${this.longitude},15z`;
        window.open(url, '_blank'); 
      }, () => {
        alert('Não conseguimos obter sua localização');
      });
    } else {
      alert('Geolocalização não é suportada pelo navegador.');
    }
  }
}
