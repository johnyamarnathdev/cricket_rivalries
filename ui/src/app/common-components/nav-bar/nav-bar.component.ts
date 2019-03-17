import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { SessionUtil } from 'src/app/helpers/session-util';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  currentUserProfileId: number;

  constructor(private router: Router, private sessionUtil: SessionUtil) {
    this.currentUserProfileId = this.sessionUtil.getUser().profileId;
    
    this.navLinks = [
      {
        label: 'League',
        link: './league',
        index: 0
      }, 
      {
        label: 'User Match',
        link: './user-match/1/'+this.currentUserProfileId,
        index: 1
      },
      {
        label: 'Players',
        link: './players',
        index: 2
      },
      {
        label: 'Rules',
        link: './rules',
        index: 3
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
