import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultReportOcorrency } from './default-report-ocorrency';

describe('DefaultReportOcorrency', () => {
  let component: DefaultReportOcorrency;
  let fixture: ComponentFixture<DefaultReportOcorrency>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultReportOcorrency],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultReportOcorrency);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
