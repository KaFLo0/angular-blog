import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent {
  // Placeholders values for dinamic properties
  @Input()
  cardPicture:string="https://picsum.photos/640/360";
  @Input()
  cardSubtitle:string="Card Categories | Post Date";
  @Input()
  cardTitle:string="Card title placeholder card mini card";
  @Input()
  cardText:string="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  @Input()
  cardAuthor:string="Kaio Davy";
  // Hard Code properties
  cardCite:string="Author: "
}
