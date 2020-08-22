import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-newCourseForm',
  templateUrl: './newCourseForm.component.html',
  styleUrls: ['./newCourseForm.component.css'],
})
export class NewCourseFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl(),
    }),
    topics: new FormArray([]),
  });

  constructor(fb: FormBuilder) {
    // This is equal to the above code but using form builder
    // this.from = fb.group({
    //   name: ['', Validators.required],
    //   contact: fb.group({
    //     email: [],
    //     phone: [],
    //   }),
    //   topics: fb.array([]),
    // });
  }

  ngOnInit() {}

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  deleteTopic(topic: FormControl) {
    console.log('CLICKED');

    let topicIndex = this.topics.controls.indexOf(topic);
    this.topics.removeAt(topicIndex);
  }
}
