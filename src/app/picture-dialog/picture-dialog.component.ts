import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Comment} from "../_models/comment";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import{ AppConstants } from '../constants/AppConstants';

@Component({
  selector: 'app-picture-dialog',
  templateUrl: './picture-dialog.component.html',
  styleUrls: ['./picture-dialog.component.css']
})
export class PictureDialogComponent implements OnInit {

  comments = [] as  any;

  myForm: FormGroup;

  parentStyle = 'dialog';

  constructor(public thisDialogRef: MatDialogRef<PictureDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private http: HttpClient, fb: FormBuilder) {
    this.myForm = fb.group({
      'newComment': ['', Validators.required]
    });

    this.http.get<Comment[]>(AppConstants.PICTURE_COMMENT + data.id).subscribe( resp => {
      for(let index in resp) {
        let commentNumber = Number(index) + 1;
        this.comments.push(
          new Comment(
            commentNumber,
            resp[index].id,
            resp[index].comment,
            'panel panel-success'

          )
        )
      }
    });
  }

  ngOnInit() {
  }

  addComment(formValues: any) {
    this.http.post(AppConstants.PICTURE_COMMENT + this.data.id, {comment: formValues.newComment}).subscribe( resp => {
      this.comments = [];
      this.http.get<Comment[]>(AppConstants.PICTURE_COMMENT + this.data.id).subscribe( resp => {
        for(let index in resp) {
          let commentNumber = Number(index) + 1;
          this.comments.push(
            new Comment(
              commentNumber,
              resp[index].id,
              resp[index].comment,
              'panel panel-success'

            )
          )
        }
        this.myForm.reset();
      });
    });

  }
}
