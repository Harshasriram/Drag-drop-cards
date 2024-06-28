import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DragDropCardsComponent } from './drag-drop-cards/drag-drop-cards.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, DragDropCardsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'drag-drop-poc';
}
