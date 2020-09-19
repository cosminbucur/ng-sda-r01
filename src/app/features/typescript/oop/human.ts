export interface Human {
    firstName: string;
    lastName: string;
    fullName?: Function;
    isLate?(time: Date): Function;
}
