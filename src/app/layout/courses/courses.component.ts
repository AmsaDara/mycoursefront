import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from './courses.model';
import { CourseService } from './courses.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Menu } from '../menu.moddel';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
 
  courses: any;
  @Input() icon?: string;
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

  // showCourseFormForUpdate(course: ICourse) {
  //   this.courseToUpdate={... course}
  //   this.context='UPDATE'
  // }

  courseById(): void {
    //this.courseService.getCourseById(this.courseId).subscribe()
    this.router.navigate(['/coursesBy_id/{{courses.id}}']);
  }

  deleteCourse(course: ICourse) {
    this.courseService.removeCourse(course).subscribe(console.log);
    this.courseService
      .getAllCourse()
      .subscribe((data) => (this.courses = data));
  }
  
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e'
    },
    {
      title: 'Student',
      icon: 'school',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Courses',
          icon: 'cast_for_education',
          link: '/courses',
          color: '#ff7f0e'
        },
        {
          title: 'Participants',
          icon: 'group',
          color: '#ff7f0e',
          link: '/participants'
        },
        {
          title: 'Progress',
          icon: 'bar_chart',
          color: '#ff7f0e',
          link: '/progress'
        },
      ]
    },
    {
      title: 'News',
      icon: 'newspaper',
      link: '/annonces',
      color: '#ff7f0e'
    },
    {
      title: 'Calendar/Event',
      icon: 'event',
      link: '/calendarevent',
      color: '#ff7f0e'
    }
  ];
}
