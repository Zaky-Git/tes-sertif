import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembuatanSertifikatComponent } from './pembuatan-sertifikat.component';

describe('PembuatanSertifikatComponent', () => {
  let component: PembuatanSertifikatComponent;
  let fixture: ComponentFixture<PembuatanSertifikatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembuatanSertifikatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembuatanSertifikatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
