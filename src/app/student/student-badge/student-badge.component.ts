import { Component, Input, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-student-badge',
  templateUrl: './student-badge.component.html',
  styleUrls: ['./student-badge.component.scss']
})
export class StudentBadgeComponent implements OnInit {

  //@Input() userInfo:any;
  constructor(private authenticateService:AuthenticateService) { }

  ngOnInit(): void {
  }
  // logout(){
  //   this.authenticateService.logout();
  // }

}
