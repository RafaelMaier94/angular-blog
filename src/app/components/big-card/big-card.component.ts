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
  title: string = 'Nova versão do Angular lançada';
  @Input()
  description: string = '';
  constructor() {}

  ngOnInit(): void {}
}
