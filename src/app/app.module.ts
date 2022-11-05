import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/materials.module';
import { FormsModule } from '@angular/forms';
import { LayoutsModule } from './layout/layouts.module';
import { LayoutModule } from '@angular/cdk/layout';
import { CoursesComponent } from './layout/courses/courses.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { MenuItemComponent } from './layout/menu-item/menu-item.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { NavComponent } from './layout/nav/nav.component';
import { NewsComponent } from './layout/news/news.component';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantsComponent } from './layout/participants/participants.component';
import { ProgressionBarComponent } from './layout/progression-bar/progression-bar.component';
import { CalendarEventComponent } from './layout/calendar-event/calendar-event.component';
import { RegisterComponent } from './student/register/register.component';
import { SigninComponent } from './student/signin/signin.component';
import { StudentBadgeComponent } from './student/student-badge/student-badge.component';
import { StudentModule } from './student/student.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './student/jwt.interceptors';
import { ProfilComponent } from './layout/profil/profil.component';
import { NoteComponent } from './layout/note/note.component';
import { MessageComponent } from './layout/message/message.component';
import { BycourseComponent } from './layout/courses/bycourse/bycourse.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CoursesComponent,
    HeaderComponent,
    MenuItemComponent,
    PageHeaderComponent,
    NewsComponent,
    ParticipantsComponent,
    ProgressionBarComponent,
    CalendarEventComponent,
    RegisterComponent,
    SigninComponent,
    StudentBadgeComponent,
    ProfilComponent,
    MessageComponent,
    NoteComponent,
    BycourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MaterialModule,
    LayoutsModule,
    //StudentModule,
    //RouterModule.forRoot(routes),
   
  ], 
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
