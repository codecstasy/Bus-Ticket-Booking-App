import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../../models/trip.model';
import { Router } from '@angular/router';
import { Bus } from '../../models/bus.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css'
})
export class TripComponent implements OnInit{
  constructor(private router: Router, private http: HttpClient) {}
  bus !: Bus;
  private apiUrl = 'http://localhost:5201/api/busdata/get-bus-data';
  busId !: number;

  ngOnInit() {
    this.busId = 2;
    this.http.get<Bus>(`${this.apiUrl}/${this.busId}`).subscribe();
  }

  @Input()
  trip!: Trip;

  navigateToSelectSeats() {
    this.router.navigate(['/select-seats'])
  }
}
