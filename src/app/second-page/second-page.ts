import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './second-page.html',
})
export class SecondPage {}
