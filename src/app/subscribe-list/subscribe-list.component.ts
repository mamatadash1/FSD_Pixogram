import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subscriber} from "../_models/subsciber";
import {MatSlideToggleChange, MatSnackBar} from "@angular/material";
import{ AppConstants } from '../constants/AppConstants';

@Component({
  selector: 'app-subscribe-list',
  templateUrl: './subscribe-list.component.html',
  styleUrls: ['./subscribe-list.component.css']
})
export class SubscribeListComponent implements OnInit {

  displayedColumns: string[] = ['email', 'toggle'];
  public dataSource : any;

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {
    http.get<Subscriber[]>(AppConstants.ALL_SUBSCRIBERS).subscribe( resp => {
      this.dataSource = resp;
    });
  }

  ngOnInit() {
  }

  toggle(event: MatSlideToggleChange, email: string) {
    if(event.checked) {
      this.http.post(AppConstants.ADD_SUBSCRIBER + email, null).subscribe(
        resp => {
          this.snackbar.openFromComponent(SnackbarSubscribed, {
            duration: 3000,
          });
        }
      );
    } else {
      this.http.post(AppConstants.REMOVE_SUBSCRIBER + email, null).subscribe(
        resp => {
          this.snackbar.openFromComponent(SnackbarUnSubscribed, {
            duration: 3000,
          });
        }
      );
    }
  }

}

@Component({
  selector: 'snackbar-subscribed',
  template: '<span class="snackbar-proposal">\n' +
    '  You have been subscribed to the user!\n' +
    '</span>',
  styles: [`
    .snackbar-proposal {
      color: #00b8ff;
    }
  `],
})
export class SnackbarSubscribed {}

@Component({
  selector: 'snackbar-unsubscribed',
  template: '<span class="snackbar-proposal">\n' +
    '  You have been unsubscribed from the user!\n' +
    '</span>',
  styles: [`
    .snackbar-proposal {
      color: #00b8ff;
    }
  `],
})
export class SnackbarUnSubscribed {}
