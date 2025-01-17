import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.css',
})
export class ReportCardComponent {
  @Input() content: any;
}
