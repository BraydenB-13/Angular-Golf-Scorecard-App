import { Component, OnInit } from '@angular/core';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  faFlag = faFlag;

  constructor() { }

  ngOnInit(): void {
  }
}
