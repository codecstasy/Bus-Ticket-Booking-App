export class Trip {
    id: number;
    origin: string;
    destination: string;
    journeyDate: Date; // Updated to Date
    departureTime: string;
    arrivalTime: string;
    fare: number;

    constructor(
        id: number, 
        origin: string, 
        destination: string, 
        journeyDate: Date, // Updated here as well
        departureTime: string, 
        arrivalTime: string, 
        fare: number
    ) {
        this.id = id;
        this.origin = origin;
        this.destination = destination;
        this.journeyDate = journeyDate;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.fare = fare;
    }
}
