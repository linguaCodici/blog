import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content-full/content/content.component';
import { NavComponent } from './content-full/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './content-full/content/blogs/blogs.component';
import { UsersComponent } from './content-full/content/users/users.component';
import { ContactComponent } from './content-full/content/contact/contact.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ContentFullComponent } from './content-full/content-full.component';
import { AboutComponent } from './content-full/content/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogShowComponent } from './content-full/content/blogs/blog-show/blog-show.component';
import { BlogEditComponent } from './content-full/content/blogs/blog-edit/blog-edit.component';
import { BlogListComponent } from './content-full/content/blogs/blog-list/blog-list.component';
import { BlogNavComponent } from './content-full/content/blogs/blog-nav/blog-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    NavComponent,
    HomeComponent,
    BlogsComponent,
    UsersComponent,
    ContactComponent,
    ContentFullComponent,
    AboutComponent,
    BlogShowComponent,
    BlogEditComponent,
    BlogListComponent,
    BlogNavComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
