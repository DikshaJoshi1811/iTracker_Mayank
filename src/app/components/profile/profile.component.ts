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
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  // onClickSubmit(data: any) {
  //   this.formData.setValue(data);
  //   this.formData.setControl(
  //     "slotDate",
  //     new FormControl(this.formatDateToString(this.slotDate))
  //   );
  //   console.log("FORM DATA", this.formData.getRawValue());
  // }
}
  


