import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  city: string;

  apiCall(courseId) {
    return this.http.get(`https://golf-courses-api.herokuapp.com/courses/${courseId}`);
  }

  weatherCall(courseId) {
    if (courseId == '11819') {
      this.city = '5777224'
    } else if (courseId == '18300') {
      this.city = '5844096'
    } else if (courseId == '19002') {
      this.city = '5781860'
    }
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?id=${this.city}&appid=35fa6bfb97e7665757ec413a4e3465c2`)
  }
}
