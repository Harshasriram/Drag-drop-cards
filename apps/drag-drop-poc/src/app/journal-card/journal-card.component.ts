import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-journal-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './journal-card.component.html',
  styleUrl: './journal-card.component.css',
})
export class JournalCardComponent {
  @Input() content: any;
}
