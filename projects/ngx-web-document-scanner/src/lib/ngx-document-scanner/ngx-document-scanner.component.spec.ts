import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDocumentScannerComponent } from './ngx-document-scanner.component';

describe('NgxDocumentScannerComponent', () => {
  let component: NgxDocumentScannerComponent;
  let fixture: ComponentFixture<NgxDocumentScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDocumentScannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDocumentScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
