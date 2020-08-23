import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courseName: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  submit() {
    this.router.navigate(['/courses']);
  }

  ngOnInit() {
    // get optional params
    // this.route.queryParamMap.subscribe((params) => {});
    // Get the params once
    // this.route.snapshot.paramMap.get
    // Get the params
    // this.route.paramMap.subscribe((params) => {
    //   this.courseName = params.get('courseName');
    // });
    // Get both
    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(
      (combined) => {
        this.courseName = combined[0].get('courseName');
        console.log(combined[1].get('page'));
      }
    );
  }
}
