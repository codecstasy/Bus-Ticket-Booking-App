import { Routes } from '@angular/router';
import { AvailableTripsComponent } from './available-trips/available-trips.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookseatComponent } from './bookseat/bookseat.component';

export const routes: Routes = [
    {
        path: '',
        component: NavbarComponent
    },
    {
        path: 'available-trips',
        component: AvailableTripsComponent
    }
];
