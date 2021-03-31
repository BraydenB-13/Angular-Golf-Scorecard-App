import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiCall(courseId) {
    return this.http.get(`https://golf-courses-api.herokuapp.com/courses/${courseId}`);
  }
}
