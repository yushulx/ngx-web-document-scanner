import { TestBed } from '@angular/core/testing';

import { NgxWebDocumentScannerService } from './ngx-web-document-scanner.service';

describe('NgxWebDocumentScannerService', () => {
  let service: NgxWebDocumentScannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWebDocumentScannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
