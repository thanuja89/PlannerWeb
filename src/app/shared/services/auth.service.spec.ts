import { TestBed, inject  } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { skip, take } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should perform login', inject(
    [HttpTestingController, AuthService],
    (
      httpMock: HttpTestingController,
      authService: AuthService
    ) => {
      const mockUser = new User('aaaaaa', 'user1', 'user1@aaa.com', 'ADA13SDWC4C');

      const spy = spyOn(localStorage, 'setItem');

      authService.currentUser$
        .pipe(
          skip(1),
          take(1)
        )
        .subscribe(u => { 
          expect(u).toEqual(mockUser);
        });

      authService.login('aa', 'pp')
        .subscribe(r => { 
          expect(r).toEqual(mockUser);
          expect(spy).toHaveBeenCalledWith('currentUser', JSON.stringify(mockUser));
        });

      const mockReq = httpMock.expectOne(`${environment.apiUrl}auth/CreateToken`);
      expect(mockReq.cancelled).toBeFalsy();

      mockReq.flush(mockUser);     
    }));
});
