import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookseat',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: './bookseat.component.html',
  styleUrls: ['./bookseat.component.css']
})
export class BookseatComponent implements OnInit {
onSubmit() {
  this.navigateToSearchTrip();
}

  // FormGroup to handle the reactive form
  tripForm: FormGroup;
  
  // Locations fetched from the API
  locationData: any[] = [];
  
  // Form control bindings
  startLocation: string = '';
  endLocation: string = '';
  tripDate: string = '';
  
  // Date range settings
  minDate: string = '';
  maxDate: string = '';

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
    // Initializing form controls with validation
    this.tripForm = this.formBuilder.group({
      startLocation: ['', Validators.required],
      endLocation: ['', Validators.required],
      tripDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Set the date range (min and max dates)
    this.setMinMaxDate();
    // Fetch the locations for the dropdown
    this.getLocations();
  }

  // Format the date into YYYY-MM-DD for the HTML input
  private setMinMaxDate(): void {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 14);  // Set max date to 14 days from today

    // Helper function to format dates correctly
    const formatDate = (date: Date): string => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    };

    // Set the minimum and maximum dates for the form
    this.minDate = formatDate(today);
    this.maxDate = formatDate(maxDate);
  }

  isStartLocationDifferent(location: any) {
    return this.tripForm.get('startLocation')?.value !== location.id;
  }
  

  // Navigation logic when the form is valid
  navigateToSearchTrip(): void {
    if (this.tripForm.valid) {
      // If form is valid, navigate to the available trips page
      this.router.navigate(['/available-trips']);
    } else {
      // Handle invalid form submission
      console.log('Form is invalid');
    }
  }

  // Fetch locations data from the API
  private getLocations(): void {
    this.http.get<any>("http://localhost:5201/api/location/get-locations")
      .subscribe({
        next: (response) => {
          this.locationData = response; // Store location data
        },
        error: (error) => {
          console.error('Error fetching data:', error); // Handle errors gracefully
        }
      });
  }
}
