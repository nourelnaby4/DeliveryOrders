/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrderDetailsService } from './orderDetails.service';

describe('Service: OrderDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderDetailsService]
    });
  });

  it('should ...', inject([OrderDetailsService], (service: OrderDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
