import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.css']
})
export class LargeCardComponent {
  // Placeholders values for dinamic properties
  @Input()
  cardPicture:string="https://picsum.photos/640/360";
  @Input()
  cardSubtitle:string="Card Categories | Post Date";
  @Input()
  cardTitle:string="Card title placeholder card in construction card large card";
  @Input()
  cardText:string="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum eros quis pharetra malesuada. Pellentesque vestibulum nisl eget quam consectetur interdum. Etiam a mauris metus. Vestibulum dapibus feugiat volutpat.";
  @Input()
  cardAuthor:string="Kaio Davy";
  // Hard Code properties
  cardCite:string="Author: "
}
