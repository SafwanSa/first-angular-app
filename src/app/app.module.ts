import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService, Author } from './authors.service';
import { FormsModule } from '@angular/forms';
import { AuthorComponent } from './author/author.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
