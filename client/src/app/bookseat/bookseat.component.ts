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
    console.log(this.tripForm);
    this.navigateToSearchTrip();
  }

  tripForm: FormGroup;

  locationData: any[] = [];

  startLocation: string = '';
  endLocation: string = '';
  tripDate: string = '';

  minDate: string = '';
  maxDate: string = '';

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
    this.tripForm = this.formBuilder.group({
      startLocation: ['', Validators.required],
      endLocation: ['', Validators.required],
      tripDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.setMinMaxDate();
    this.getLocations();
  }

  // Format the date into YYYY-MM-DD
  private setMinMaxDate(): void {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 14);

    const formatDate = (date: Date): string => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    };
    this.minDate = formatDate(today);
    this.maxDate = formatDate(maxDate);
  }

  isStartLocationDifferent(location: any) {
    return this.tripForm.get('startLocation')?.value !== location.id;
  }


  navigateToSearchTrip(): void {
    if (this.tripForm.valid) {
      this.router.navigate(['/available-trips'], {
        queryParams: {
          startLocation: this.tripForm.value.startLocation, 
          endLocation: this.tripForm.value.endLocation,
          tripDate: this.tripForm.value.tripDate
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

  private getLocations(): void {
    this.http.get<any>("http://localhost:5201/api/location/get-locations")
      .subscribe({
        next: (response) => {
          this.locationData = response;
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
  }
}
