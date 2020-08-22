import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-newCourseForm',
  templateUrl: './newCourseForm.component.html',
  styleUrls: ['./newCourseForm.component.css'],
})
export class NewCourseFormComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([]),
  });

  constructor() {}

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
