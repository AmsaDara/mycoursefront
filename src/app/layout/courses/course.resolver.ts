import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CourseService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<any> {
  
  constructor(private courseService: CourseService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
    return this.courseService.getCourseById(route.paramMap.get('id') as string);
  }
  
}
