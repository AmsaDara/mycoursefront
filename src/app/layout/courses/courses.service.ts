import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICourse } from './courses.model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http:HttpClient){}

  getAllCourse():Observable<any>{
     return this.http.get(`${environment.BASE_API_URI}/courses/allcourse`) as Observable<ICourse[]>
  }

  addCourse(course:ICourse):Observable<ICourse>{
      return this.http.post(`${environment.BASE_API_URI}/courses`,course) as Observable<ICourse>
  }
  
  getCourseById(id: string):Observable<any>{
    return this.http.get(`${environment.BASE_API_URI}/courses/${id}`)  as Observable<ICourse[]>
  }

  removeCourse(course:ICourse): Observable<any>{
     return this.http.delete(`${environment.BASE_API_URI}/courses/${course._id}`)
  }

  updateCourse(course:ICourse):Observable<any>{
    return this.http.put(`${environment.BASE_API_URI}/courses/${course._id}`,course)
  }
}