import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStudent }  from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) {  }
  
  registerStudent(student:IStudent):Observable<any>{
    
    return this.http.post(`${environment.BASE_API_URI}/users/register`,student) as Observable<any>;
  }
  
  // authenticateStudent(email:string,password:string):any{
  //   return []
  // }
  
}
