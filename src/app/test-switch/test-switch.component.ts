import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-switch',
  templateUrl: './test-switch.component.html',
  styleUrls: ['./test-switch.component.css']
})
export class TestSwitchComponent implements OnInit {

  @Input() viewMode: string;

  constructor() { }

  ngOnInit(): void {
  }

}
