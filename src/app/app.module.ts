import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DragDirective } from './upload-media/components/single-media/dragDrop.directive';
import { HomepageComponent } from './homepage/homepage.component';
import { TabsComponent } from './tabs/tabs.component';
import {MatListModule, MatSidenavModule, MatSnackBarModule, MatTooltipModule, MatTabsModule} from "@angular/material";
import { MatCardModule } from '@angular/material';
import { MatDividerModule  } from '@angular/material';
import { PictureDialogComponent } from './picture-dialog/picture-dialog.component';
import { ImgWrapperComponent } from './img-wrapper/img-wrapper.component';
import {FormsModule} from "@angular/forms";
import { MatDialogModule, MatToolbarModule, MatIconModule, MatMenuModule} from '@angular/material';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {JwtInterceptor} from "./_helper/jwt.interceptor";
import {ErrorInterceptor} from "./_helper/error.interceptor";
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SubscribeListComponent } from './subscribe-list/subscribe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomepageComponent,
    TabsComponent,
    ImgWrapperComponent,
    SidebarComponent,
    ToolbarComponent,
    SubscribeListComponent
        // DragDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
    MatDividerModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatButtonToggleModule
  ],
  providers: [
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  exports: [
    MatListModule,
    MatSidenavModule
  ],
  entryComponents: [
    //PictureDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
