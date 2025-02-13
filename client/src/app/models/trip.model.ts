export class Trip {
    id: string;
    departureLocationId: string;
    destinationLocationId: string;
    journeyDate: Date; // Updated to Date
    departureTime: string;
    arrivalTime: string;
    fare: number;

    constructor(
        id: string, 
        departureLocationId: string, 
        destinationLocationId: string, 
        journeyDate: Date, // Updated here as well
        departureTime: string, 
        arrivalTime: string, 
        fare: number
    ) {
        this.id = id;
        this.departureLocationId = departureLocationId;
        this.destinationLocationId = destinationLocationId;
        this.journeyDate = journeyDate;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.fare = fare;
    }
}
