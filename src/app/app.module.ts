import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService, Author } from './authors.service';
import { FormsModule } from '@angular/forms';
import { AuthorComponent } from './author/author.component';
import { TestSwitchComponent } from './test-switch/test-switch.component';
import { NameFormatDirective } from './directives/name-format.directive';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorComponent,
    TestSwitchComponent,
    NameFormatDirective,
    ContactUsComponent,
    SignupFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AuthorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
