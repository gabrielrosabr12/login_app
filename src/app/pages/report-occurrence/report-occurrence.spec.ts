import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOccurrence } from './report-occurrence';

describe('ReportOccurrence', () => {
  let component: ReportOccurrence;
  let fixture: ComponentFixture<ReportOccurrence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportOccurrence, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportOccurrence);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the expected form controls', () => {
    expect(component.noteForm.contains('title')).toBeTrue();
    expect(component.noteForm.contains('body')).toBeTrue();
    expect(component.noteForm.contains('files')).toBeTrue();
  });
});
