import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadMediaRoutingModule } from './upload-media-routing.module';
import { SingleMediaComponent } from './components/single-media/single-media.component';
import { MultipleMediaComponent } from './components/multiple-media/multiple-media.component';
import { MediaComponent } from './components/media/media.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DragDirective } from './components/single-media/dragDrop.directive';
@NgModule({
  declarations: [
  
    MediaComponent,
    SingleMediaComponent,
    MultipleMediaComponent,
    DragDirective
  ],
  imports: [
    CommonModule,
    UploadMediaRoutingModule,
    NgxFileDropModule,
    NgxDropzoneModule
  ]
})
export class UploadMediaModule { }
