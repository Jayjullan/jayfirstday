import { Component } from '@angular/core';
import { Button } from '../button/button';
import type { Location } from './location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Button],
  templateUrl: './home.html',
  styleUrl: './../../styles.css',
})
export class Home {
  title = 'My First Angular App';

  myLocation: Location = {
    id: 1,
    name: 'Waterfront',
    city: 'Kuching',
    country: 'Malaysia',
    image: '/images/waterfront.jpg',
  };
}
