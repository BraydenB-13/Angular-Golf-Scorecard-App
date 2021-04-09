import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Pars } from '../../interfaces/pars';
import { Yards } from '../../interfaces/yards';
import { Hcp } from '../../interfaces/hcp';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {
  
  constructor(private api:ApiService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    var id = '';
    var teeId = 0;
    var course = sessionStorage.getItem("course");
    var tee = sessionStorage.getItem("tee");
    var players = sessionStorage.getItem("players");
    if (tee == 'Pro') {
      teeId = 0
    } else if (tee == 'Champion') {
      teeId = 1
    } else if (tee == 'Mens') {
      teeId = 2
    } else {
      teeId = 3
    }
    if (course == 'Thanksgiving Point') {
      id = '11819'
    } else if (course == 'Fox Hollow') {
      id = '18300'
    } else {
      id = '19002'
      teeId -= 1;
    }
    this.api.apiCall(id).subscribe((data)=>{
      this.setUpTable(data, course, tee, players, teeId);  
    })

    this.api.weatherCall(id).subscribe((data)=>{
      this.getWeather(data);  
    })
  }

  faFlag = faFlag;
  faWind = faWind;

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

  direction: string;
  speed: string;
  wind: string;

  getWeather(data) {
    this.direction = this.degToCompass(data.wind.deg)
    this.speed = data.wind.speed;
    this.wind = `${this.speed} mph ${this.direction}`
  }

  degToCompass(deg) {
    var index = (Math.round(deg / 22.5)) % 16;
    var directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return directions[index];
  }

  setUpTable(data, course, tee, players, teeId) {
    this.yardsOut = 0;
    this.yardsIn = 0;
    this.yardsTot = 0;
    for (let i = 0; i < 18; i++) {
      this.pars[i] = data.data.holes[i].teeBoxes[teeId].par
      this.yards[i] = data.data.holes[i].teeBoxes[teeId].yards
      this.hcp[i] = data.data.holes[i].teeBoxes[teeId].hcp
      if (i < 9) {
        this.yardsOut += Number(this.yards[i])
      } else {
        this.yardsIn += Number(this.yards[i])
      }
    }
    this.yardsTot = this.yardsOut + this.yardsIn
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
    var outValue = 0;
    var inValue = 0;
    var value = 0;
    var value2 = 0;
    var definedCount = 0;
    for (let i = 0; i < 9; i++) {
      value = 0;
      if (holes[i] !== undefined) {
        value = holes[i] - Number(this.pars[i]);
        value2 = holes[i];
        definedCount ++;
      }
      outTotal += value;
      outValue += value2;
      value = 0;
      value2 = 0;
      if (holes[i + 9] !== undefined) {
        value = holes[i + 9] - Number(this.pars[i + 9]);
        value2 = holes[i + 9];
        definedCount ++;
      }
      inTotal += value;
      inValue += value2;
    }
    if (id == 1) {
      this.p1Out = outValue;
      this.p1In = inValue;
      this.p1Tot = outTotal + inTotal;
      var name = this.p1name;
      var tot = this.p1Tot;
    } else if (id == 2) {
      this.p2Out = outValue;
      this.p2In = inValue;
      this.p2Tot = outTotal + inTotal;
      var name = this.p2name;
      var tot = this.p2Tot;
    } else if (id == 3) {
      this.p3Out = outValue;
      this.p3In = inValue;
      this.p3Tot = outTotal + inTotal;
      var name = this.p3name;
      var tot = this.p3Tot;
    } else {
      this.p4Out = outValue;
      this.p4In = inValue;
      this.p4Tot = outTotal + inTotal;
      var name = this.p4name;
      var tot = this.p4Tot;
    }
    if (definedCount == 18) {
      if (tot < 0) {
        this.message = `Good Job ${name}, On to the PGA!`
      } else if (tot == 0) {
        this.message = `Well done ${name}, Right on target!`
      } else {
        this.message = `Better luck next time ${name}!`
      }
      this._snackBar.open(`${this.message}`, 'Close', {
        duration: 3000
      })
    }
  }
}
