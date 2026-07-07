import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOccurrence } from './report-occurrence';

describe('ReportOccurrence', () => {
  let component: ReportOccurrence;
  let fixture: ComponentFixture<ReportOccurrence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportOccurrence],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportOccurrence);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
