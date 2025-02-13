export class Trip {
    id: string;
    departureLocation: string;
    destinationLocation: string;
    journeyDate: Date; // Updated to Date
    departureTime: string;
    arrivalTime: string;
    fare: number;

    constructor(
        id: string, 
        departureLocation: string, 
        destinationLocation: string, 
        journeyDate: Date, // Updated here as well
        departureTime: string, 
        arrivalTime: string, 
        fare: number
    ) {
        this.id = id;
        this.departureLocation = departureLocation;
        this.destinationLocation = destinationLocation;
        this.journeyDate = journeyDate;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.fare = fare;
    }
}
