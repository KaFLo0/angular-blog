import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuStickyTopComponent } from './components/menu-sticky-top/menu-sticky-top.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { SearchMenuComponent } from './components/search-menu/search-menu.component';
import { LargeCardComponent } from './components/large-card/large-card.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';
import { TopicsComponent } from './components/topics/topics.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuStickyTopComponent,
    CategoriesMenuComponent,
    SearchMenuComponent,
    LargeCardComponent,
    MiniCardComponent,
    TopicsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
