import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private authors: Author[] = [
    new Author('author1', false),
    new Author('author2', true),
    new Author('author3', true)
  ];
  constructor() { }

  getAuthors(): Author[] {
    return this.authors;
  }
}

export class Author {
  constructor(public name: string, public isActive: boolean) {
    this.name = name;
    this.isActive = isActive;
  }

  toggle(): void {
    this.isActive = !this.isActive;
  }
}
