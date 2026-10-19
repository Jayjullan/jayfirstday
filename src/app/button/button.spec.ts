import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() label: string = 'Click Here';
  @Input() link: string = '/';
}
