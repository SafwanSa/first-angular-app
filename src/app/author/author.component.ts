import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../authors.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input() author: Author;
  @Output() deleteAuthor = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    // Tell the parent to delete this author
    this.deleteAuthor.emit();
  }

}
