import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './newCourseForm/newCourseForm.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  { path: 'contact', component: ContactUsComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'courses/:courseName', component: CourseComponent },
  { path: 'courses', component: NewCourseFormComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
