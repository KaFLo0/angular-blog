import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-sticky-top',
  templateUrl: './menu-sticky-top.component.html',
  styleUrls: ['./menu-sticky-top.component.css']
})
export class MenuStickyTopComponent {

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
