import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-menu-sticky-top',
  templateUrl: './menu-sticky-top.component.html',
  styleUrls: ['./menu-sticky-top.component.css']
})
export class MenuStickyTopComponent implements OnInit {

  menuPicture:string="../../../assets/controller2.jpg";
  menuTitle:string="Angular Blog";
  menuTitle2:string="Gaming news and much more!";

  ngOnInit(): void {
    // Inicialize os tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  githubRedirect():void {
    window.open('https://github.com/KaFLo0', '_blank');
  };

  linkedinRedirect():void {
    window.open('https://www.linkedin.com/in/kaio-davy-costa-200338293/', '_blank');
  };

  emailRedirect():void {
    window.open('mailto:kaiodavy7@gmail.com', '_blank');
  };
}
