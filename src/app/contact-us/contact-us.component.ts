import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
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
