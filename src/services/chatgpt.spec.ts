import { TestBed } from '@angular/core/testing';

import { Chatgpt } from './chatgpt';

describe('Chatgpt', () => {
  let service: Chatgpt;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Chatgpt);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
