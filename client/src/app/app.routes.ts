import { Routes } from '@angular/router';
import { AvailableTripsComponent } from './available-trips/available-trips.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookseatComponent } from './bookseat/bookseat.component';
import { AppComponent } from './app.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';

export const routes: Routes = [
    {
        path: '',
        component: BookseatComponent
    },
    {
        path: 'book-seat',
        component: BookseatComponent
    },
    {
        path: 'available-trips',
        component: AvailableTripsComponent
    },
    {
        path: 'select-seats',
        component: SelectSeatsComponent
    }
];
