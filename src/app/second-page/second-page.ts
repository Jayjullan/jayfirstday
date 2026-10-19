import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [Button],
  templateUrl: './second-page.html',
})
export class SecondPage {}
