import { Component } from '@angular/core';
import { BookseatComponent } from "../bookseat/bookseat.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BookseatComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
