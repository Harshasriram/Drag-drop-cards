import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropCardsComponent } from './drag-drop-cards.component';

describe('DragDropCardsComponent', () => {
  let component: DragDropCardsComponent;
  let fixture: ComponentFixture<DragDropCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragDropCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DragDropCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
