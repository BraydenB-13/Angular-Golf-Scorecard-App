import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ScorecardComponent } from './components/scorecard/scorecard.component';

const routes: Routes = [
  { path: 'scorecard', component: ScorecardComponent },
  { path: 'home', component: HomepageComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }