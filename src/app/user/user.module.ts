import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsertimesheetComponent } from './usertimesheet/usertimesheet.component';
import { UserleaveComponent } from '../userleave/userleave.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ UserprofileComponent, UsertimesheetComponent, UserleaveComponent, EditProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
