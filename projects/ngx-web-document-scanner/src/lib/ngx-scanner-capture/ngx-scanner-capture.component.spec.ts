import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScannerCaptureComponent } from './ngx-scanner-capture.component';

describe('NgxScannerCaptureComponent', () => {
  let component: NgxScannerCaptureComponent;
  let fixture: ComponentFixture<NgxScannerCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxScannerCaptureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxScannerCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
