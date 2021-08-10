import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {

  @Input() title!: string;
  @Input() description!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
