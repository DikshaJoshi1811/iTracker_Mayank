import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { ProfileComponent } from './profile/profile.component';


//<--MATERIAL ANGULAR-->
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpBackend, HttpClientModule,
  HttpHeaders,
  HttpRequest,
  HttpResponse } from '@angular/common/http';
import { ProfileService } from './profile.service';
  

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,MatListModule,
    MatCardModule,
    ModalModule.forRoot(),
    HttpClientModule
    // HttpHeaders,
    // HttpRequest,
    // HttpResponse

  
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent,ProfileComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }