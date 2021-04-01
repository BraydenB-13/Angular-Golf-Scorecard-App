import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Pars } from '../../interfaces/pars';
import { Yards } from '../../interfaces/yards';
import { Hcp } from '../../interfaces/hcp';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styles: [
  ]
})
export class ScorecardComponent implements OnInit {
  
  constructor(private api:ApiService, private _snackBar: MatSnackBar) {}

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
  yardsOut: number;
  yardsIn: number;
  yardsTot: number;
  message: string;
  p1name: string;
  p1h1: number;
  p1h2: number;
  p1h3: number;
  p1h4: number;
  p1h5: number;
  p1h6: number;
  p1h7: number;
  p1h8: number;
  p1h9: number;
  p1h10: number;
  p1h11: number;
  p1h12: number;
  p1h13: number;
  p1h14: number;
  p1h15: number;
  p1h16: number;
  p1h17: number;
  p1h18: number;
  p1In: number;
  p1Out: number;
  p1Tot: number;
  p1Totals: Array<number>;
  p1Holes: Array<number>;
  p2name: string;
  p2h1: number;
  p2h2: number;
  p2h3: number;
  p2h4: number;
  p2h5: number;
  p2h6: number;
  p2h7: number;
  p2h8: number;
  p2h9: number;
  p2h10: number;
  p2h11: number;
  p2h12: number;
  p2h13: number;
  p2h14: number;
  p2h15: number;
  p2h16: number;
  p2h17: number;
  p2h18: number;
  p2In: number;
  p2Out: number;
  p2Tot: number;
  p2Totals: Array<number>;
  p2Holes: Array<number>;
  p3name: string;
  p3h1: number;
  p3h2: number;
  p3h3: number;
  p3h4: number;
  p3h5: number;
  p3h6: number;
  p3h7: number;
  p3h8: number;
  p3h9: number;
  p3h10: number;
  p3h11: number;
  p3h12: number;
  p3h13: number;
  p3h14: number;
  p3h15: number;
  p3h16: number;
  p3h17: number;
  p3h18: number;
  p3In: number;
  p3Out: number;
  p3Tot: number;
  p3Totals: Array<number>;
  p3Holes: Array<number>;
  p4name: string;
  p4h1: number;
  p4h2: number;
  p4h3: number;
  p4h4: number;
  p4h5: number;
  p4h6: number;
  p4h7: number;
  p4h8: number;
  p4h9: number;
  p4h10: number;
  p4h11: number;
  p4h12: number;
  p4h13: number;
  p4h14: number;
  p4h15: number;
  p4h16: number;
  p4h17: number;
  p4h18: number;
  p4In: number;
  p4Out: number;
  p4Tot: number;
  p4Totals: Array<number>;
  p4Holes: Array<number>;

  setUpTable(data, course, tee, players, teeId) {
    this.yardsOut = 0;
    this.yardsIn = 0;
    this.yardsTot = 0;
    for (let i = 0; i < 18; i++) {
      this.pars[i] = data.data.holes[i].teeBoxes[teeId].par
    }
    for (let i = 0; i < 18; i++) {
      this.yards[i] = data.data.holes[i].teeBoxes[teeId].yards
    }
    for (let i = 0; i < 9; i++) {
      this.yardsOut += Number(this.yards[i])
    }
    for (let i = 9; i < 18; i++) {
      this.yardsIn += Number(this.yards[i])
    }
    this.yardsTot = this.yardsOut + this.yardsIn
    for (let i = 0; i < 18; i++) {
      this.hcp[i] = data.data.holes[i].teeBoxes[teeId].hcp
    }
    this.course = course;
    this.tee = tee;
    this.players = players;
  }

  getScores1() {
    var holes = [this.p1h1, this.p1h2, this.p1h3, this.p1h4, this.p1h5, this.p1h6, this.p1h7, this.p1h8, this.p1h9, this.p1h10, this.p1h11, this.p1h12, this.p1h13, this.p1h14, this.p1h15, this.p1h16, this.p1h17, this.p1h18]
    var id = 1;
    this.getScores(holes, id)
  }

  getScores2() {
    var holes = [this.p2h1, this.p2h2, this.p2h3, this.p2h4, this.p2h5, this.p2h6, this.p2h7, this.p2h8, this.p2h9, this.p2h10, this.p2h11, this.p2h12, this.p2h13, this.p2h14, this.p2h15, this.p2h16, this.p2h17, this.p2h18]
    var id = 2;
    this.getScores(holes, id)
  }

  getScores3() {
    var holes = [this.p3h1, this.p3h2, this.p3h3, this.p3h4, this.p3h5, this.p3h6, this.p3h7, this.p3h8, this.p3h9, this.p3h10, this.p3h11, this.p3h12, this.p3h13, this.p3h14, this.p3h15, this.p3h16, this.p3h17, this.p3h18]
    var id = 3;
    this.getScores(holes, id)
  }

  getScores4() {
    var holes = [this.p4h1, this.p4h2, this.p4h3, this.p4h4, this.p4h5, this.p4h6, this.p4h7, this.p4h8, this.p4h9, this.p4h10, this.p4h11, this.p4h12, this.p4h13, this.p4h14, this.p4h15, this.p4h16, this.p4h17, this.p4h18]
    var id = 4;
    this.getScores(holes, id)
  }

  getScores(holes, id) {
    var outTotal = 0;
    var inTotal = 0;
    var value = 0;
    var definedCount = 0;
    for (let i = 0; i < 9; i++) {
      value = 0;
      if (holes[i] !== undefined) {
        value = holes[i] - Number(this.pars[i]);
        definedCount ++;
      }
      outTotal += value;
      value = 0;
      if (holes[i + 9] !== undefined) {
        value = holes[i + 9] - Number(this.pars[i + 9]);
        definedCount ++;
      }
      inTotal += value;
    }
    if (id == 1) {
      this.p1Out = outTotal;
      this.p1In = inTotal;
      this.p1Tot = this.p1Out + this.p1In;
      var name = this.p1name;
      var tot = this.p1Tot;
    } else if (id == 2) {
      this.p2Out = outTotal;
      this.p2In = inTotal;
      this.p2Tot = this.p2Out + this.p2In;
      var name = this.p2name;
      var tot = this.p2Tot;
    } else if (id == 3) {
      this.p3Out = outTotal;
      this.p3In = inTotal;
      this.p3Tot = this.p3Out + this.p3In;
      var name = this.p3name;
      var tot = this.p3Tot;
    } else {
      this.p4Out = outTotal;
      this.p4In = inTotal;
      this.p4Tot = this.p4Out + this.p4In;
      var name = this.p4name;
      var tot = this.p4Tot;
    }
    if (definedCount == 18) {
      if (tot < 0) {
        this.message = `Good Job ${name}, On to the PGA,`
      } else if (tot == 0) {
        this.message = `Well done ${name}, Right on target,`
      } else {
        this.message = `Better luck next time ${name}`
      }
      this._snackBar.open(`${this.message}`, 'Close', {
        duration: 3000
      })
    }
  }
}
