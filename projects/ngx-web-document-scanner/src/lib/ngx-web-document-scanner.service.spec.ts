import { TestBed } from '@angular/core/testing';

import { NgxDocumentScannerService } from './ngx-web-document-scanner.service';

describe('NgxDocumentScannerService', () => {
  let service: NgxDocumentScannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDocumentScannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
