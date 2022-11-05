import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../student/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  
  constructor(
    private router:Router,
    private auhenticationService:AuthenticateService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const currentStudent = this.auhenticationService.currentStudentValue;
    if(currentStudent){
      return true;
      
    }
    
    this.router.navigate(['/signin'], {queryParams: { returnUrl: state.url }});
    return false;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      const currentStudent = this.auhenticationService.currentStudentValue;
      
      if(currentStudent){
        return true;
        
      }
      
      this.router.navigate(['/signin'], {queryParams: { returnUrl: state.url }});
      return false;
  }
  
}
