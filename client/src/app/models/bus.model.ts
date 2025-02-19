export class Bus {
    id: number;
    isSeatAvailable: string = ""; 
    registrationCode: string = "";
    isActive: boolean = true;
    busModel: string = "";

    constructor(
        id: number, 
        isSeatAvailable: string, 
        registrationCode: string,
        isActive: boolean,
        busModel: string
    ) {
        this.id = id;
        this.isSeatAvailable = isSeatAvailable;
        this.registrationCode = registrationCode;
        this.isActive = isActive;
        this.busModel = busModel;
    }
}
