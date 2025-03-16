import { Component } from '@angular/core';
import { ApiCallsService } from '../services/api-calls.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-seats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-seats.component.html',
  styleUrl: './select-seats.component.css'
})
export class SelectSeatsComponent {
  seats: boolean[] = [];
  selectedSeats: number[] = [];
  maxSelection: number = 4;

  constructor(private apiCallsService : ApiCallsService) {}

  fetchSeats(): void {
    this.apiCallsService.fetchSeats().subscribe(
      (data) => {
        return data;
      },
      (error) => {
        console.error('Error fetching seat data', error);
      }
    )
  }

  toggleSeat(index: number): void {
    if(this.seats[index]) {
      this.seats[index] = false;
      this.selectedSeats = this.selectedSeats.filter(seat => seat !== index);
    } else {
      if(this.selectedSeats.length < this.maxSelection) {
        this.seats[index] = true;
        this.selectedSeats.push(index);
      }
    }
  }
}
