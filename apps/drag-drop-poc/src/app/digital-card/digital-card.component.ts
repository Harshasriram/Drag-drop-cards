import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-digital-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './digital-card.component.html',
  styleUrl: './digital-card.component.css',
})
export class DigitalCardComponent {
  @Input() content: any;
}
