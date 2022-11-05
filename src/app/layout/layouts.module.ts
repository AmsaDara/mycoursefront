import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { NewsComponent } from './news/news.component';
import { ParticipantsComponent } from './participants/participants.component';
import { ProgressionBarComponent } from './progression-bar/progression-bar.component';
import { CalendarEventComponent } from './calendar-event/calendar-event.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material/materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { MessageComponent } from './message/message.component';
import { NoteComponent } from './note/note.component';




@NgModule({
  declarations: [
    // NavComponent,
    // HomeComponent,
    // CoursesComponent,
    // HeaderComponent,
    // MenuItemComponent,
    // PageHeaderComponent,
  
     //NewsComponent
  
    // ParticipantsComponent
  
    //ProgressionBarComponent
  
   // CalendarEventComponent
  
    //ProfilComponent
  
    //MessageComponent,
    //NoteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
    // MoviesModule
    //StudentModule,
  ],
  exports:[
    // LayoutComponent,
    // HomeComponent,
    // CoursesComponent,
    // HeaderComponent,
    // MenuItemComponent,
    // PageHeaderComponent
  ]
  })
           
export class LayoutsModule { }