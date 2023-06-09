import { Component} from '@angular/core';
interface home{
  id:number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}[];


@Component({
  selector: 'app-homelocation',
  templateUrl: './homelocation.component.html',
  styleUrls: ['./homelocation.component.css']
})
export class HomelocationComponent {

  housingLocationList:home [] = [
    {
      id: 1,
      name: 'Warm Housing',
      city: 'Juneau',
      state: 'AK',
      photo: '/assets/2.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 2,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '/assets/3.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 3,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: '/assets/4.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Hopeful Apartment ',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/5.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 5,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/6.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
  
  ];


}

