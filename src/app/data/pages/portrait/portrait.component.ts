import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss'],
})
export class PortraitComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isIntersecting(status: boolean, index: number) {
    console.log('Element #' + index + ' is intersecting ' + status);
  }
}
