import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MainPageComponent } from './main-page/main-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { ProfileCreationComponent } from './profile-creation/profile-creation.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { MY_DATE_FORMATS } from './helper/constants'; 
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { ProfileFormComponent } from './shared/profile-form/profile-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditProfileDialogComponent } from './shared/edit-profile-dialog/edit-profile-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { GenderPipe } from './helper/gender.pipe';
import {MatSnackBar} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProfileCreationComponent,
    ProfileListComponent,
    ConfirmDialogComponent,
    ProfileFormComponent,
    EditProfileDialogComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBar,
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
