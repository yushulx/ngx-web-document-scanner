import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWebDocumentScannerComponent } from './ngx-web-document-scanner.component';

describe('NgxWebDocumentScannerComponent', () => {
  let component: NgxWebDocumentScannerComponent;
  let fixture: ComponentFixture<NgxWebDocumentScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxWebDocumentScannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxWebDocumentScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
