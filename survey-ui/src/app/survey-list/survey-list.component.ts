import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  surveys!: Survey[];

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.getAllSurveys();
  }

  private getAllSurveys(){
    this.surveyService.getAllSurveys().subscribe(data => {
      this.surveys = data;
    })
  }
}
