import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactMethod = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
  ];

  constructor() {}

  ngOnInit() {}

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
    // f.valid ...
  }
}
