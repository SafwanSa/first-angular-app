import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { Author } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  authorName: string;

  constructor(private authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
  }


  onPressed() {
    this.authors.push(new Author(this.authorName, false));
    this.authorName = "";
  }

  addAuthor() {
    this.authors.push(new Author(this.authorName, false));
    this.authorName = "";
  }

  deleteAuthor(author: Author) {
    const index = this.authors.indexOf(author)
    if (index !== -1) {
      this.authors.splice(index, 1);
    }
  }

  ngOnInit(): void {
    this.authorName = "";
  }

}
