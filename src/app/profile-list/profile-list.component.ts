import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonProfile } from '../helper/interfaces';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ConfirmDialogComponent} from '../shared/confirm-dialog/confirm-dialog.component';
import {EditProfileDialogComponent} from '../shared/edit-profile-dialog/edit-profile-dialog.component';
import {ProfileService} from '../services/profile.service';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any = new MatTableDataSource<PersonProfile>();
  displayedColumns: string[] = ['personId', 'firstName', 'lastName', 'birthDate', 'gender', 'country', 'street', 'apartment', 'action'];
  constructor(public dialog: MatDialog, private profileService: ProfileService, private snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(){
    this.profileService.get().subscribe(result => {
      this.dataSource = result;
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  openDeleteDialog(profile: PersonProfile) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        cancelText: 'Cancel',
        confirmText: 'Delete',
        message: `Wanna delete profile of ${profile.firstName} ${profile.lastName}?`,
        title: 'Delete Profile'
      },
      disableClose: true 
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.profileService.delete(profile.id).subscribe(result => {
          console.log(result);
          this.getProfiles();
        })
      }
    });
  }
  
  openEditDialog(profile: PersonProfile) {
    const dialogRef = this.dialog.open(EditProfileDialogComponent, {
      data: profile,
      disableClose: true 
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.profileService.patch(result, profile.id).subscribe(
        (result) => {
          console.log(result);
          this.getProfiles();
        },
        (error) => {
          console.log(error)
        })
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  
}
