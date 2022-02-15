import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { FileHandle } from 'src/app/upload-media/components/single-media/dragDrop.directive';

@Component({
  selector: 'app-single-media',
  templateUrl: './single-media.component.html',
  styleUrls: ['./single-media.component.scss']
})
export class SingleMediaComponent implements OnInit {
public mydata:any=[];
public firstImage: any;
public files:any= [];
public files1: FileHandle[] = [];
public isImage : boolean = false;
public isVideo : boolean = false;
public notCorectFormat : boolean = false;
public intialBrightness: any =1;
  constructor() { }

  ngOnInit(): void {
  }

	onSelect(event : any) {
    this.files=[]
		console.log(event);
		this.files.push(...event.addedFiles);
	}

  filesDropped(files: any): void {
    this.files1.push(files);
    let fileDesc = files[0]
   if( fileDesc.file.type.indexOf('image')>-1){
    this.isImage = true;
    this.notCorectFormat = false;
    this.firstImage = files[0];
   } else if(fileDesc.file.type.indexOf('video')>-1){
    this.isVideo = true;
    this.notCorectFormat = false;
    this.firstImage = files[0];
   } else{
     this.notCorectFormat = true;
   }
    console.log(this.files1)
  }

  onSelectFile(event :any) {
    this.mydata = []
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          if (file.type.indexOf("image") > -1) {
            this.mydata.push({
              url:e.target.result,
              type: 'img'
            });
          this.isImage = true;
          this.firstImage = this.mydata[0];
          console.log(this.firstImage);
          } else if (file.type.indexOf("video") > -1) {
            this.mydata.push({
              url:e.target.result,
              type: 'video'
            });
          this.isVideo = true;
          this.firstImage = this.mydata[0];
          console.log(this.firstImage);
          }
        };
       
        reader.readAsDataURL(file);
      } 
      
      
    }
  }

  upload(){
    console.log(this.firstImage.url)
  }
  incBrightness(){

    let ele = document.getElementById("imgUploaded");
    if(ele){
      this.intialBrightness = this.intialBrightness+10

      ele.style.filter = "brightness(50%)"

    }
  }
  incContrast(){
    let ele = document.getElementById("imgUploaded");
    if(ele){
      ele.style.filter = "contrast(50%)"
  }
}
applyGreyScale(){
  let ele = document.getElementById("imgUploaded");
  if(ele){
    ele.style.filter = "grayscale(50%)";
}
}
applySepia(){
  let ele = document.getElementById("imgUploaded");
  if(ele){
    ele.style.filter = "sepia(50%)";
}
}
}
