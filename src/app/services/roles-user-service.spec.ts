import { TestBed } from '@angular/core/testing';

import { RolesUserService } from './roles-user-service';

describe('RolesUserService', () => {
  let service: RolesUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolesUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
