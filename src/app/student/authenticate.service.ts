import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStudent } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private currentStudentSubject$: BehaviorSubject<IStudent>;
  public currentStudent$: Observable<IStudent>;

  constructor(
    private http: HttpClient,
    private router: Router
    ) {
    this.currentStudentSubject$ = new BehaviorSubject<IStudent>(JSON.parse(localStorage.getItem('currentStudent') as string));
    this.currentStudent$ = this.currentStudentSubject$.asObservable();
     }
  public get currentStudentValue(): IStudent {
    return this.currentStudentSubject$.value;
  }
  
  login(email: string, password: string) {
    let _student: IStudent;
    return this.http.post<any>(`${environment. BASE_API_URI}/users/authenticate`, { email, password })
      .pipe(map(response => {
        _student = { ...response.payload.student };
        _student.token = response.payload.token;
        // login successful if there's a jwt token in the response
        if (_student && _student.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentStudent', JSON.stringify(_student));
          this.currentStudentSubject$.next(_student);
        }
        return _student;
      }));
  }
  
  logout() {
    //remove student for to local storage to log student out
    localStorage.removeItem('currentStudent');
    this.currentStudentSubject$.next({} as IStudent);
    this.router.navigate([''])
    //document.location.reload(true);
    
  }
  
}
