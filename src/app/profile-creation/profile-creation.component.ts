import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-creation',
  templateUrl: './profile-creation.component.html',
  styleUrls: ['./profile-creation.component.css'],
})
export class ProfileCreationComponent implements OnInit {

  
  constructor(private profileService: ProfileService, private snackBar: MatSnackBar) { 
  }
  
  ngOnInit(){
    
  }

  onSubmit(event: any){
    this.profileService.create(event.value).subscribe(
      (result) => {
        this.openSnackBar('Profile has been created successfully!');
      },
      (error) =>{
        this.openSnackBar('Error calling backend!');
      });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
