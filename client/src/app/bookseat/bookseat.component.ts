import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookseat',
  standalone: true,
  imports: [],
  templateUrl: './bookseat.component.html',
  styleUrl: './bookseat.component.css'
})
export class BookseatComponent {
  constructor(private router: Router) {}

  navigateToSearchTrip(): void {
    this.router.navigate(['/available-trips'])
  }
}
