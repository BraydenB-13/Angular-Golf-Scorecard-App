import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Pars } from '../../interfaces/pars';
import { Yards } from '../../interfaces/yards';
import { Hcp } from '../../interfaces/hcp';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styles: [
  ]
})
export class ScorecardComponent implements OnInit {
  
  constructor(private api:ApiService) {}

  ngOnInit(): void {
    var id = '';
    var teeId = 0;
    var course = sessionStorage.getItem("course");
    var tee = sessionStorage.getItem("tee");
    var players = sessionStorage.getItem("players");
    if (course == 'Thanksgiving Point') {
      id = '11819'
    } else if (course == 'Fox Hollow') {
      id = '18300'
    } else {
      id = '19002'
    }
    if (tee == 'Pro') {
      teeId = 0
    } else if (tee == 'Champion') {
      teeId = 1
    } else if (tee == 'Mens') {
      teeId = 2
    } else {
      teeId = 3
    }
    this.api.apiCall(id).subscribe((data)=>{
      this.setUpTable(data, course, tee, players, teeId);  
    })
  }

  course: string;
  tee: string;
  players: string;
  pars: Pars = [];
  yards: Yards = [];
  hcp: Hcp = [];

  setUpTable(data, course, tee, players, teeId) {
    for (let i = 0; i < 18; i++) {
      this.pars[i] = data.data.holes[i].teeBoxes[teeId].par
    }
    for (let i = 0; i < 18; i++) {
      this.yards[i] = data.data.holes[i].teeBoxes[teeId].yards
    }
    for (let i = 0; i < 18; i++) {
      this.hcp[i] = data.data.holes[i].teeBoxes[teeId].hcp
    }
    console.log(this.pars);
    this.course = course;
    this.tee = tee;
    this.players = players;
  }
}
