import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import { NewCourseFormComponent } from './newCourseForm/newCourseForm.component';

import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { AppErrorHandler } from './app-error-handler';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseComponent } from './course/course.component';
@NgModule({
  declarations: [	
    AppComponent,
    AuthorsComponent,
    AuthorComponent,
    TestSwitchComponent,
    NameFormatDirective,
    ContactUsComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    NavbarComponent,
    NotFoundComponent,
      CourseComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthorsService,
    PostsService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
