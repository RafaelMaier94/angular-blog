import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  imageSrc: string = '';
  title: string = '';
  description: string = '';
  private id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });
    this.setValuesToComponent(this.id);
  }
  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id === id)[0];
    if (!result) {
      return;
    }
    this.title = result.title;
    this.description = result.description;
    this.imageSrc = result.imageSrc;
  }
}
