import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CourseService } from '../courses/courses.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  courses: any;
  
  //courseToUpdate?:ICourse
  //context : 'ADD' | 'UPDATE' = 'ADD'
  constructor(
    private courseService: CourseService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loadCourses()
  }
  
  loadCourses(){
    this.courseService.getAllCourse().subscribe({
      next: (data) => {
        if (data.status !== 'error') {
          this.courses = data.payload;
        } else {
          this.snackBar.open(data.message, 'x');
          this.courses = [];
        }
      },
      error: (error) => {
        this.snackBar.open(JSON.stringify(error), 'x');
      },
    });
  }
  
  ngOnInit() {
    this.loadCourses()
  }

}
