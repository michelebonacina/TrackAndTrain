import { TestBed } from '@angular/core/testing';

import { WaypointTypeService } from './waypoint-type.service';

describe('WaypointTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaypointTypeService = TestBed.get(WaypointTypeService);
    expect(service).toBeTruthy();
  });
});
