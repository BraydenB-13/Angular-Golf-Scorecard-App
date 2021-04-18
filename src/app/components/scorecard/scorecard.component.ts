import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Data } from '../../interfaces/data';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { values } from '../../interfaces/values';
import { info } from '../../interfaces/info';

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

  pars: Data = [];
  yards: Data = [];
  hcp: Data = [];
  info = {} as info;
  p1Values = {} as values;
  p2Values = {} as values;
  p3Values = {} as values;
  p4Values = {} as values;

  getWeather(data) {
    this.info.direction = data.wind.deg;
    this.info.speed = data.wind.speed;
  }

  setUpTable(data, course, tee, players, teeId) {
    this.info.yardsOut = 0;
    this.info.yardsIn = 0;
    this.info.yardsTot = 0;
    for (let i = 0; i < 18; i++) {
      this.pars[i] = data.data.holes[i].teeBoxes[teeId].par
      this.yards[i] = data.data.holes[i].teeBoxes[teeId].yards
      this.hcp[i] = data.data.holes[i].teeBoxes[teeId].hcp
      if (i < 9) {
        this.info.yardsOut += Number(this.yards[i])
      } else {
        this.info.yardsIn += Number(this.yards[i])
      }
    }
    this.info.yardsTot = this.info.yardsOut + this.info.yardsIn
    this.info.course = course;
    this.info.tee = tee;
    this.info.players = players;
  }

  checkNames() {
    if (this.p1Values.name == this.p2Values.name && (this.p1Values.name || this.p2Values.name)) {
      this.popUp('Cannot have duplicate names');
      this.p2Values.name = '';
    } else if (this.p1Values.name == this.p3Values.name && (this.p1Values.name || this.p3Values.name)) {
      this.popUp('Cannot have duplicate names');
      this.p3Values.name = '';
    } else if (this.p1Values.name == this.p4Values.name && (this.p1Values.name || this.p4Values.name)) {
      this.popUp('Cannot have duplicate names');
      this.p4Values.name = '';
    } else if (this.p2Values.name == this.p3Values.name && (this.p2Values.name || this.p3Values.name)) {
      this.popUp('Cannot have duplicate names');
      this.p3Values.name = '';
    } else if (this.p2Values.name == this.p4Values.name && (this.p2Values.name || this.p4Values.name)) {
      this.popUp('Cannot have duplicate names');
      this.p4Values.name = '';
    } else if (this.p3Values.name == this.p4Values.name && (this.p3Values.name || this.p4Values.name)) {
      this.popUp('Cannot have duplicate names');
      this.p4Values.name = '';
    }
  }

  getScores1() {
    var holes = [this.p1Values.h1, this.p1Values.h2, this.p1Values.h3, this.p1Values.h4, this.p1Values.h5, this.p1Values.h6, this.p1Values.h7, this.p1Values.h8, this.p1Values.h9, this.p1Values.h10, this.p1Values.h11, this.p1Values.h12, this.p1Values.h13, this.p1Values.h14, this.p1Values.h15, this.p1Values.h16, this.p1Values.h17, this.p1Values.h18]
    var id = 1;
    this.getScores(holes, id)
  }

  getScores2() {
    var holes = [this.p2Values.h1, this.p2Values.h2, this.p2Values.h3, this.p2Values.h4, this.p2Values.h5, this.p2Values.h6, this.p2Values.h7, this.p2Values.h8, this.p2Values.h9, this.p2Values.h10, this.p2Values.h11, this.p2Values.h12, this.p2Values.h13, this.p2Values.h14, this.p2Values.h15, this.p2Values.h16, this.p2Values.h17, this.p2Values.h18]
    var id = 2;
    this.getScores(holes, id)
  }

  getScores3() {
    var holes = [this.p3Values.h1, this.p3Values.h2, this.p3Values.h3, this.p3Values.h4, this.p3Values.h5, this.p3Values.h6, this.p3Values.h7, this.p3Values.h8, this.p3Values.h9, this.p3Values.h10, this.p3Values.h11, this.p3Values.h12, this.p3Values.h13, this.p3Values.h14, this.p3Values.h15, this.p3Values.h16, this.p3Values.h17, this.p3Values.h18]
    var id = 3;
    this.getScores(holes, id)
  }

  getScores4() {
    var holes = [this.p4Values.h1, this.p4Values.h2, this.p4Values.h3, this.p4Values.h4, this.p4Values.h5, this.p4Values.h6, this.p4Values.h7, this.p4Values.h8, this.p4Values.h9, this.p4Values.h10, this.p4Values.h11, this.p4Values.h12, this.p4Values.h13, this.p4Values.h14, this.p4Values.h15, this.p4Values.h16, this.p4Values.h17, this.p4Values.h18]
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
      this.p1Values.Out = outValue;
      this.p1Values.In = inValue;
      this.p1Values.Tot = outTotal + inTotal;
      var name = this.p1Values.name;
      var tot = this.p1Values.Tot;
    } else if (id == 2) {
      this.p2Values.Out = outValue;
      this.p2Values.In = inValue;
      this.p2Values.Tot = outTotal + inTotal;
      var name = this.p2Values.name;
      var tot = this.p2Values.Tot;
    } else if (id == 3) {
      this.p3Values.Out = outValue;
      this.p3Values.In = inValue;
      this.p3Values.Tot = outTotal + inTotal;
      var name = this.p3Values.name;
      var tot = this.p3Values.Tot;
    } else {
      this.p4Values.Out = outValue;
      this.p4Values.In = inValue;
      this.p4Values.Tot = outTotal + inTotal;
      var name = this.p4Values.name;
      var tot = this.p4Values.Tot;
    }
    if (definedCount == 18) {
      if (tot < 0) {
        this.info.message = `Good Job ${name}, On to the PGA!`
      } else if (tot == 0) {
        this.info.message = `Well done ${name}, Right on target!`
      } else {
        this.info.message = `Better luck next time ${name}!`
      }
      this.popUp(this.info.message);
    }
  }

  popUp(message) {
    this._snackBar.open(message, 'Close', {
      duration: 3000
    })
  }
}
