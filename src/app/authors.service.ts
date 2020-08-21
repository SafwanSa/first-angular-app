import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private authors: Author[] = [];
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
