import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import{ AppConstants } from '../constants/AppConstants';

@Injectable({
  providedIn: 'root'
})
export class UploadPictureService {

  constructor(private http: HttpClient) {}

  pushFileToStorage(file: File, name: String, description: String, shared: boolean): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', AppConstants.UPLOAD_IMAGE + '?pictureName=' + name + '&pictureDescription=' + description + '&shared=' + shared, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
}
