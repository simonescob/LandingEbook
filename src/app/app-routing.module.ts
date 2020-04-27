import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThankspageComponent } from './thankspage/thankspage.component';
import { AppComponent } from './app.component';
import { LadingComponent } from './lading/lading.component';


const routes: Routes = [
  {path: '', component: LadingComponent},
  {path: 'thanks', component: ThankspageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
