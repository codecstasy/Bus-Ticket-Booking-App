export class Trip {
    id: number;
    origin: string;
    destination: string;
    departureTime: string;
    arrivalTime: string;
    fare: number;

    constructor(id: number, origin: string, destination: string, departureTime: string, arrivalTime: string, fare: number) {
        this.id = id;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.fare = fare;
    }
}