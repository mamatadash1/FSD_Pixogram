import { Component, Input, OnChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-img-wrapper',
  template: `
    <div class="oversize">
      <img mat-card-image [src]="dataUrl$|async" [ngStyle]="{'width':parentStyle == 'img-wrap' ? '300px':'550px'}"
      style="margin-left: auto; margin-right: auto; display: block;"/>
    </div>
  `
})
export class ImgWrapperComponent implements OnChanges  {

  @Input() public src: string;
  @Input() public parentStyle: string;
  
  public src$ : BehaviorSubject<string> ;
  public dataUrl$ :any ;

  ngOnInit(): void {
    this.src$ = new BehaviorSubject(this.src);
    this.dataUrl$ = this.src$.pipe(switchMap(url => this.loadImage(url)))
   }
   
  ngOnChanges(): void {
    this.src$.next(this.src);
  }

 // dataUrl$ = this.src$.pipe(switchMap(url => this.loadImage(url)))

  // we need HttpClient to load the image and DomSanitizer to trust the url
  constructor(private httpClient: HttpClient, private domSanitizer: DomSanitizer) {
  }

  private loadImage(url: string): Observable<any> {
    return this.httpClient
      .get(url, {responseType: 'blob'})
      .pipe(map(e => this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(e))))
  }
}
