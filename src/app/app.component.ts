import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isBold = false;
  weightOfFont = this.isBold ? 'bold' : 'normal';


  rulers = [
    {
      name: 'Harald I',
      nickname: 'Bluetooth',
      startOfReign: 958,
      endOfReign: 986,
      country: 'Denmark',
      title: 'king'
    }, {
      name: 'John',
      nickname: 'the Fearless',
      startOfReign: 1404,
      endOfReign: 1419,
      country: 'Burgundy',
      title: 'duke' 
    }, {
      name: 'Ivan',
      nickname: 'the Terrible',
      startOfReign: 1547,
      endOfReign: 1584,
      country: 'Russia',
      title: 'tsar'
    }, {
      name: 'Arduin',
      nickname: 'of Ivrea',
      startOfReign: 1002,
      endOfReign: 1014,
      country: 'Italy',
      title: 'king'
    }, {
      name: 'Richard I',
      nickname: 'the Lionheart',
      startOfReign: 1189,
      endOfReign: 1199,
      country: 'England',
      title: 'king'
    }, {
      name: 'Suleiman',
      nickname: 'the Magnificent',
      startOfReign: 1520,
      endOfReign: 1566,
      country: 'Turkey',
      title: 'sultan'
    }
];
}
