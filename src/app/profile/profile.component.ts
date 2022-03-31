import { Component, Injectable, OnInit, TemplateRef } from "@angular/core";

import { map, take } from "rxjs/operators";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ProfileService } from "../profile.service";
import { IProfile } from "../profile";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  // data: any;
  //name:any;
  // name="Diksha";
  // designation="Intern";
  // location="Bengaluru, Karnataka, India, (APAC)";
  // empId="INT950";
  form: any = {
    primary_skill: "Java",
    secondary_skill: "React",
    tertiary_skill: "JavaScript",
  };

  public profile: IProfile[]=[] ;
  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private _profileServive: ProfileService
  ) {}
  ngOnInit() {
    this._profileServive
      .getProfileInfo()
      .subscribe((data) => (this.profile = data));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  updatePrimarySkill() {
    alert("You have updated Primary Skill to: " + this.form.primary_skill);
  }
  updateSecondarySkill() {
    alert(this.form.secondary_skill);
  }
  updateTertiarySkill() {
    alert(this.form.tertiary_skill);
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
