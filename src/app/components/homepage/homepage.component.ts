import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';
import { Player } from '../../interfaces/player';
import { Tee } from '../../interfaces/tee';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [
  ]
})
export class HomepageComponent implements OnInit {

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
    {value: 1, viewValue: 1},
    {value: 2, viewValue: 2},
    {value: 3, viewValue: 3},
    {value: 4, viewValue: 4}
  ];
}

