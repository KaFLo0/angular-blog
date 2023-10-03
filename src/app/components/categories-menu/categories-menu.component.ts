import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css']
})
export class CategoriesMenuComponent {
  category1:string="Steam";
  category2:string="Playstation";
  category3:string="Xbox";
  category4:string="Nintendo";
  category5:string="Games";
  category6:string="Guides&Tutorials";
}
