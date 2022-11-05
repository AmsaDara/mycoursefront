import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Menu } from '../menu.moddel';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavComponent {
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

// export class LayoutComponent implements OnInit {  

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
