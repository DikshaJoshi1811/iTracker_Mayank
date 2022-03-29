import { Component, OnInit,TemplateRef } from '@angular/core';
import { FetchClient } from "./fetchBackend";
import { map, take } from "rxjs/operators";
// import { Component,  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  
})
export class ProfileComponent {
  data: any;
  // name:any;
  name="Diksha";
  designation="Intern";
  location="Bengaluru, Karnataka, India, (APAC)";
  empId="INT950";
  // constructor(){
  //   private httpFetch: FetchClient
  // }
  // constructor(private httpFetch: FetchClient) {
  //   this.httpFetch
  //     .get<any>(" ")
  //     .pipe(take(1), map(m => m.joke))
  //     .subscribe(data => {
  //       this.data = data;
  //     });
  //   }
  // constructor(private http: HttpClient) { }
      modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  // onClickSubmit(data: any) {
  //   this.formData.setValue(data);
  //   this.formData.setControl(
  //     "skilladd",
  //     new FormControl(this.skillAdd)
  //   );
  //   console.log("FORM DATA", this.formData.getRawValue());
  // }
  }


 
  

