import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  public currentUser$: Observable<User> = this.currentUserSubject.asObservable();
  public isLoggedIn$: Observable<boolean> = this.currentUser$.pipe(
    map(u => !!u)
  );

  constructor(private _httpClient: HttpClient) 
  { 
  }

  login(username: string, password: string){
    return this._httpClient.post<User>(`${environment.apiUrl}auth/CreateToken`, { username, password })
            .pipe(
              map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
  }

  logout(){
    localStorage.setItem('currentUser', null);
    this.currentUserSubject.next(null);
  }
}
