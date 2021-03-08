import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScorecardComponent } from './scorecard/scorecard.component';

const routes: Routes = [
  { path: 'scorecard', component: ScorecardComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
