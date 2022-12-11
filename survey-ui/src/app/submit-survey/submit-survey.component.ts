import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-submit-survey',
  templateUrl: './submit-survey.component.html',
  styleUrls: ['./submit-survey.component.css']
})
export class SubmitSurveyComponent implements OnInit {
  show = false;
  liking: { id: number, name: string }[] = [
    { id: 0, name: 'Student' },
    { id: 1, name: 'Location' },
    { id: 2, name: 'Campus' },
    { id: 3, name: 'Atmosphere' },
    { id: 3, name: 'Dorm Rooms' },
    { id: 3, name: 'Sports' }
  ];
  selected : string[] = [];
  recommend: string[] = ["", "Very Likely", "Likely", "Unlikely"]
  survey: Survey = new Survey();

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void{
  }

  saveSurvey(){
    this.surveyService.submitSurvey(this.survey).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  onSubmit(){
    this.survey.likings = this.selected.toString();
    this.saveSurvey();
  }

  addSelectedCheckbox(name: string, e: any){
    if(e.target.checked){
      this.selected.push(name);
    }
    else{
      let index = this.selected.indexOf(name);
      this.selected.splice(index, 1);
    }

    console.log(this.selected.toString());
  }
}
