import { TestBed } from '@angular/core/testing';

import { BlogMessageManagerService } from './blog-message-manager.service';

describe('BlogMessageManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogMessageManagerService = TestBed.get(BlogMessageManagerService);
    expect(service).toBeTruthy();
  });
});
