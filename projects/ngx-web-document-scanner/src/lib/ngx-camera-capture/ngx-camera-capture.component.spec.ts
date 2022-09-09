import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCameraCaptureComponent } from './ngx-camera-capture.component';

describe('NgxCameraCaptureComponent', () => {
  let component: NgxCameraCaptureComponent;
  let fixture: ComponentFixture<NgxCameraCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCameraCaptureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCameraCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
