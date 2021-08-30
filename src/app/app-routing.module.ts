import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboradComponent } from './pages/dashborad/dashborad.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashborad', pathMatch: 'full' }, 
  { path: 'dashborad', component: DashboradComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
