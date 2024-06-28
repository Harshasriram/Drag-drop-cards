import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analog-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analog-card.component.html',
  styleUrl: './analog-card.component.css',
})
export class AnalogCardComponent {
  @Input() content: any;
}
