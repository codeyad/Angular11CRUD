import { Component, OnInit, Inject } from '@angular/core';
import { PersonProfile } from '../../helper/interfaces';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.css']
})
export class EditProfileDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PersonProfile, private mdDialogRef: MatDialogRef<EditProfileDialogComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(event:any){
    this.mdDialogRef.close(event.value);
  }

}
