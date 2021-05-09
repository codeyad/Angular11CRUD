import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCreationComponent } from './profile-creation/profile-creation.component';
import { ProfileListComponent } from './profile-list/profile-list.component';

const routes: Routes = [
  {path: 'profilecreate', component: ProfileCreationComponent},
  {path:'profilelist', component: ProfileListComponent},
  {path: '**', component: ProfileCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
