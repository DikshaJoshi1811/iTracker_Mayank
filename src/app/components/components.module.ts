
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from 'src/app/app-routing.module';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
// import { ProfileComponent } from './profile/profile.component';
import { MatMenuModule } from '@angular/material/menu';
// import {MatGridListModule,MatGridTile} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCardModule,
     AngularMaterialModule,
    //  MatGridTile,
    // MatGridListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    // FlexLayoutModule
    MatInputModule,
    // ProfileComponent,
    HttpClientModule

  ],
  exports: [
    LoginComponent, RegisterComponent
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }