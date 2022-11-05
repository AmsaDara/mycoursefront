import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { AuthenticateService } from 'src/app/student/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit{
  @Output() menuToggled = new EventEmitter<boolean>();
  currentStudent?: any;
  subscription: any;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map((result: any) => result.matches),
    shareReplay()
  );
  
   //user: String = 'Papa';
  
  // constructor(private authService: AuthService) { }
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    private authenticateService: AuthenticateService,
    private router: Router,
  ) { }
  
  ngOnInit(): void {
    this.authenticateService.currentStudent$.subscribe({
      next: (student) => {
        this.currentStudent = student
      }
    })
  }
  
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe()
  // }

  logout(){
    this.authenticateService.logout();
    this.router.navigate(['signin']);
  }
  profil(): void {
    //console.log('Your identifiant ');
    this.router.navigate(['/profil'])
    
  }
  message(): void {
    //console.log('Your identifiant ');
    this.router.navigate(['/messagePersonel'])
    
  }
  note(): void {
    //console.log('Your identifiant ');
    this.router.navigate(['/mesnotes'])
    
  }

  

 
  // // constructor() { }

  // // ngOnInit(): void {
  // // }

}

