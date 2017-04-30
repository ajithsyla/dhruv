import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderContent } from '../header/header.component';
import { NavContent } from '../nav/nav.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { homeComponent } from '../home/home.component';
import { servicesComponent } from '../services/services.component';
import { PostService } from './post.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderContent,
    NavContent,
    CarouselComponent,
    homeComponent,
    servicesComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path: 'home',
      component: homeComponent
    },
    {
      path: 'services',
      component: servicesComponent
    },
    ])],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
