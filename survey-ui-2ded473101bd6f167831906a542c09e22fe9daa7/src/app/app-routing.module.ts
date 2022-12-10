import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitSurveyComponent } from './submit-survey/submit-survey.component';
import { SurveyListComponent } from './survey-list/survey-list.component';

const routes: Routes = [
  {path: 'surveys', component: SurveyListComponent},
  {path: 'submit-survey', component: SubmitSurveyComponent},
  // {path: '', redirectTo: 'surveys', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
