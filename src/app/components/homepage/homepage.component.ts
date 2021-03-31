import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';
import { Player } from '../../interfaces/player';
import { Tee } from '../../interfaces/tee';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [
  ]
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  selectedCourse: string;
  selectedTee: string;
  selectedPlayerCount: string;

  courses: Course[] = [
    {value: 'Thanksgiving Point'},
    {value: 'Fox Hollow'},
    {value: 'Spanish Oaks'}
  ];

  tees: Tee[] = [
    {value: 'Mens'},
    {value: 'Womens'},
    {value: 'Pro'},
    {value: 'Champion'}
  ];

  players: Player[] = [
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'}
  ];

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

