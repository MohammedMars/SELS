import { TestBed } from '@angular/core/testing';

import { CommunicationService as CommunicationService } from './communication.service';

describe('CommunicationServiceService', () => {
  let service: CommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
