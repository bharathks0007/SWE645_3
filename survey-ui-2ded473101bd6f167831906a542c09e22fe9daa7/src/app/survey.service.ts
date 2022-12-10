import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from './survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private baseUrl = "http://localhost:8080/api/v1.0/surveys";

  constructor(private httpClient: HttpClient) { }

  getAllSurveys() : Observable<Survey[]>{
    return this.httpClient.get<Survey[]>(`${this.baseUrl}`)
  }

  submitSurvey(survey: Survey): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, survey);
  }
}
