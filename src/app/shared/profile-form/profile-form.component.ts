import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonProfile } from '../../helper/interfaces';
import * as _moment from 'moment';

const moment = _moment;
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profile: any = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
    birthDate: [null, Validators.required],
    gender: ['m'],
    country: [''],
    street: [''],
    apartment: ['']
  });
  @Input() profileToEdit: PersonProfile;
  @Output() resultEvent = new EventEmitter<any>();
  maxDate: Date = moment().subtract(18, 'years').toDate();

  genders: Array<object> = [
    {label: 'Male', value: 'm'},
    {label: 'Female', value: 'f'},
    {label: 'Other', value: 'o'}
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    if(this.profileToEdit !== undefined){
      this.profile.setValue({
        firstName: this.profileToEdit.firstName,
        lastName: this.profileToEdit.lastName,
        birthDate: moment(this.profileToEdit.birthDate, 'DD-MM-YYYY'),
        gender: this.profileToEdit.gender,
        country: this.profileToEdit.country,
        street: this.profileToEdit.street,
        apartment: this.profileToEdit.apartment
      })
    }
  }

  onSubmit(){
    this.clearFields();
    this.resultEvent.emit(this.profile);
  }

  cancelUpdate(){
    this.resultEvent.emit(false);
  }

  clearFields(){
    this.profile.setValue({
      firstName:'',
      lastName:'',
      birthDate: null,
      gender: 'm',
      country:'',
      street:'',
      apartment:''
    });
  }

  hasError(controlName: string, errorName: string){
    // console.log(this.profile.controls[controlName].hasError(errorName));
    return this.profile.controls[controlName].hasError(errorName);
  }
  

}
