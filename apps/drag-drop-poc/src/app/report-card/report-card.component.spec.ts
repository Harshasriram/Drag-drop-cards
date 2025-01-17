import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportCardComponent } from './report-card.component';

describe('ReportCardComponent', () => {
  let component: ReportCardComponent;
  let fixture: ComponentFixture<ReportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
