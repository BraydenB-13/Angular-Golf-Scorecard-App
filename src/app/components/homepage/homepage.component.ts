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
    {value: 'Thanksgiving Point'},
    {value: 'Fox Hollow'},
    {value: 'Spanish Fork'}
  ];

  tees: Tee[] = [
    {value: 'Mens'},
    {value: 'Womens'},
    {value: 'Pro'},
    {value: 'Champion'}
  ];

  players: Player[] = [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4}
  ];
}

