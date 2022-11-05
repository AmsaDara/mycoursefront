import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gards/auth.guard';
import { CalendarEventComponent } from './layout/calendar-event/calendar-event.component';
import { BycourseComponent } from './layout/courses/bycourse/bycourse.component';
import { CourseResolver } from './layout/courses/course.resolver';
import { CoursesComponent } from './layout/courses/courses.component';
import { HomeComponent } from './layout/home/home.component';
import { MessageComponent } from './layout/message/message.component';
import { NavComponent } from './layout/nav/nav.component'
import { NewsComponent } from './layout/news/news.component';
import { NoteComponent } from './layout/note/note.component';
import { ParticipantsComponent } from './layout/participants/participants.component';
import { ProfilComponent } from './layout/profil/profil.component';
import { ProgressionBarComponent } from './layout/progression-bar/progression-bar.component';
import { RegisterComponent } from './student/register/register.component';
import { SigninComponent } from './student/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    //pathMatch: 'full',
    //redirectTo: 'home',
    component: SigninComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path: '',
    component: NavComponent,
    children: [
      // {
      //   path: '',
      //   component: CoursesComponent,
      //   canActivate:[AuthGuard]
      // },
      {
        path: 'home',
        component: HomeComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'courses',
        component: ParticipantsComponent,   
        canActivate:[AuthGuard]
      },
      {
        path: 'courses/:id',
        component: BycourseComponent,    
        canActivate:[AuthGuard],
        resolve: {
          courses: CourseResolver
        }
      },
      {
        path: 'participants',
        component: CoursesComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'progress',
        component: ProgressionBarComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'profil',
        component: ProfilComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'messagePersonel',
        component: MessageComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'mesnotes',
        component: NoteComponent,
        canActivate:[AuthGuard]
      },
      // {
      //   path: '**',
      //   redirectTo: '',
      //   pathMatch:'full'
      // },
      
    ]
  },
  
  
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'annonces',
        component: NewsComponent,
        canActivate:[AuthGuard]
      }
    ]
  },
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'calendarevent',
        component: CalendarEventComponent,
        canActivate:[AuthGuard]
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

