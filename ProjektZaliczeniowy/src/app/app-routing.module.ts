import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'lista-projektów', component: ProjectlistComponent },
  { path: 'lista-detali', component: ProjectdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
