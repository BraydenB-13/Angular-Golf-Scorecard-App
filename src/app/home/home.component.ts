import { Component, OnInit } from '@angular/core';

interface Course {
  value: string;
  viewValue: string;
}

interface Tee {
  value: string;
  viewValue: string;
}

interface Player {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedCourse: string;
  selectedTee: string;
  selectedPlayerCount: number;

  courses: Course[] = [
    {value: 'Thanksgiving Point', viewValue: 'Thanksgiving Point'},
    {value: 'Fox Hollow', viewValue: 'Fox Hollow'},
    {value: 'Spanish Fork', viewValue: 'Spanish Fork'}
  ];

  tees: Tee[] = [
    {value: 'Mens', viewValue: 'Mens'},
    {value: 'Womens', viewValue: 'Womens'},
    {value: 'Pro', viewValue: 'Pro'},
    {value: 'Champion', viewValue: 'Champion'}
  ];

  players: Player[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'}
  ];
}
