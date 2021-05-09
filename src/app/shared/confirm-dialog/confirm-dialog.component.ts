import { Component, Inject, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogConfirmData } from '../../helper/interfaces';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogConfirmData, private mdDialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  
  cancel() {
    this.close(false);
  }
  
  close(value) {
    this.mdDialogRef.close(value);
  }
  
  confirm() {
    this.close(true);
  }

  @HostListener("keydown.esc") 
  public onEsc() {
    this.close(false);
  }
  
}
