import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss'],
})
export class BigCardComponent implements OnInit {
  @Input()
  imageSrc: string = '';
  @Input()
  title: string = '';
  @Input()
  description: string = '';
  @Input()
  id: string = '0';
  constructor() {}

  ngOnInit(): void {}
}
