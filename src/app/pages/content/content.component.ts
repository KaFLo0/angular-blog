import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogData } from 'src/app/data/blog_data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // Placeholders values for dinamic properties
  newsTitle:string="";
  newsMainContent:string="";
  newsSubContent:string="";
  newsPicture:string="";
  private id:string|null = "0";
  
  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('id')
    )
    this.setValuesToProperties(this.id);
  }

  setValuesToProperties(id: string|null) {
    const result = blogData.filter(card => card.id == id)[0]

    this.newsPicture = result.Picture;
    this.newsTitle = result.Title;
    this.newsSubContent = result.SubText;
    this.newsMainContent = result.MainText;
  }
}
