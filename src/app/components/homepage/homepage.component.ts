import { Component, OnInit } from '@angular/core';
import { Select } from '../../interfaces/select';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  faFlag = faFlag;
  
  selectedCourse: string;
  selectedTee: string;
  selectedPlayerCount: string;

  courses: Select[] = [
    {value: 'Thanksgiving Point'},
    {value: 'Fox Hollow'},
    {value: 'Spanish Oaks'}
  ];

  tees: Select[] = [
    {value: 'Mens'},
    {value: 'Womens'},
    {value: 'Pro'},
    {value: 'Champion'}
  ];

  players: Select[] = [
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'}
  ];

  check() {
    if (this.selectedCourse == 'Spanish Oaks') {
      this.tees.splice(2, 1);
    } else if (this.tees.length < 4){
      this.tees.splice(2, 0, {value: 'Pro'});
    }
  }

  check2() {
    if (this.selectedTee == 'Pro') {
      this.courses.splice(2, 1);
    } else if (this.courses.length < 3) {
      this.courses.splice(2, 0, {value: 'Spanish Oaks'});
    }
  }

  submit() {
    if (this.selectedCourse, this.selectedTee, this.selectedPlayerCount) {
      sessionStorage.setItem("course", this.selectedCourse);
      sessionStorage.setItem("tee", this.selectedTee);
      sessionStorage.setItem("players", this.selectedPlayerCount);
      this.router.navigate(['scorecard']);
    } else {
      this._snackBar.open('Please select a value for each input', 'Close', {
        duration: 3000
      })
    }
  }
}