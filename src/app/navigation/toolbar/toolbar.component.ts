import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthenticationService} from "../../_services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  public username: string | null;
  navLinks: any[];
  activeLinkIndex = -1;
  public authService:AuthenticationService;

  constructor(authService:AuthenticationService,
              public routes:Router) {
    this.authService = authService;
    this.username = authService.currentUserSubject.getValue() ? authService.currentUserSubject.getValue().username : null;

    this.navLinks = [
      {
          label: 'Actions',
          link: './homepage',
          index: 0
      }, {
          label: 'Gallery',
          link: './picture-gallery',
          index: 1
      }, {
          label: 'Upload Piture',
          link: './upload-picture',
          index: 2
      }, {
        label: 'Subscribers List',
        link: './subscribers-list',
        index: 3
    }
  ];
  }

  ngOnInit() {
    this.routes.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.routes.url));
  });
  }

  public logout() {
    this.authService.logout();
    this.routes.navigate(['']);
    location.reload();
  }


}
