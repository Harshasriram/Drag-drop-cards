import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalogCardComponent } from './analog-card.component';

describe('AnalogCardComponent', () => {
  let component: AnalogCardComponent;
  let fixture: ComponentFixture<AnalogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalogCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
