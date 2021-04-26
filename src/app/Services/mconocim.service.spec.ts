import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MConocimService } from './mconocim.service';
import { __asyncValues } from 'tslib';

describe('MConocimService', () => {
  let service: MConocimService;
  let http: HttpClient;
  let httpClientSpy: { get: jasmine.Spy };


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MConocimService);
  });

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MConocimService(httpClientSpy as any );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



});
