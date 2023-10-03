import { Component, OnInit  } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {
  searchMenuTitle:string="My Blog";
  searchMenuTooltip:string="Search for news, games, events and more";
  buttonText:string="Search";

  ngOnInit(): void {
    // Inicialize os tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
}
