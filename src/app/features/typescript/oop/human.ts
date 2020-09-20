export interface Human {
    firstName: string;
    lastName: string;
    fullName?: Function;    // don't do this
    isLate?(time: Date): Function; // don't do this
}
