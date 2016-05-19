import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { DashboardService } from './dashboard.service';

describe('Dashboard Service', () => {
  beforeEachProviders(() => [DashboardService]);

  it('should ...',
      inject([DashboardService], (service: DashboardService) => {
    expect(service).toBeTruthy();
  }));
});
