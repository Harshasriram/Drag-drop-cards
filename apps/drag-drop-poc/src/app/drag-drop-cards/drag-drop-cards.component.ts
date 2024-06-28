import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalogCardComponent } from '../analog-card/analog-card.component';
import { DigitalCardComponent } from '../digital-card/digital-card.component';
import { EventCardComponent } from '../event-card/event-card.component';
import { JournalCardComponent } from '../journal-card/journal-card.component';
import { WidgetCardComponent } from '../widget-card/widget-card.component';
import { ReportCardComponent } from '../report-card/report-card.component';

@Component({
  selector: 'app-drag-drop-cards',
  standalone: true,
  imports: [CommonModule, AnalogCardComponent, DigitalCardComponent, EventCardComponent, JournalCardComponent, WidgetCardComponent, ReportCardComponent],
  templateUrl: './drag-drop-cards.component.html',
  styleUrl: './drag-drop-cards.component.css',
})
export class DragDropCardsComponent {
  cards = [
    { id: 1, type: 'event', "size": 1, content: { /* event-specific content */ } },
    { id: 2, type: 'analog', "size": 2, content: { /* analog-specific content */ } },
    { id: 3, type: 'digital', "size": 1, content: { /* digital-specific content */ } },
    { id: 4, type: 'journal', "size": 1, content: { /* journal-specific content */ } },
    { id: 5, type: 'report', "size": 1, content: { /* report-specific content */ } },
    // { id: 6, type: 'widget', "size": 1, content: { /* widget-specific content */ } },
  ];


  // Logic for feature using just drag and drop api of HTML5 and javascript
  onDragStart(event: DragEvent, index: number) {
    event.dataTransfer?.setData('text/plain', index.toString());
  }

  onDrop(event: DragEvent, index: number) {
    const draggedIndex = event.dataTransfer?.getData('text');
    if (draggedIndex !== null) {
      this.moveCard(parseInt(draggedIndex as any), index);
    }
    event.preventDefault();
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  moveCard(fromIndex: number, toIndex: number) {
    const movedCard = this.cards.splice(fromIndex, 1)[0];
    this.cards.splice(toIndex, 0, movedCard);
    
    this.rearrangeCards();
  }

  rearrangeCards() {
    let firstRowWidth = 0;
    let secondRowWidth = 0;
    const firstRow: any[] = [];
    const secondRow: any[] = [];
  
    // Distribute cards into two rows based on their sizes
    for (const card of this.cards) {
      if (firstRowWidth + card.size <= 3) {
        firstRow.push(card);
        firstRowWidth += card.size;
      } else {
        secondRow.push(card);
        secondRowWidth += card.size;
      }
    }
  
    // Ensure both rows are correctly balanced
    while (firstRowWidth > 3 || secondRowWidth > 3) {
      if (firstRowWidth > 3) {
        const card = firstRow.pop();
        secondRow.unshift(card);
        firstRowWidth -= card.size;
        secondRowWidth += card.size;
      } else if (secondRowWidth > 3) {
        const card = secondRow.shift();
        firstRow.push(card);
        secondRowWidth -= card.size;
        firstRowWidth += card.size;
      }
    }
  
    // Flatten the rows back into the cards array
    this.cards = [...firstRow, ...secondRow];
  }


  
}
