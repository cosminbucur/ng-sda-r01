import { Human } from './human';
export class Person implements Human {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }


    // short form
    // constructor(firstName: string, lastName: string) {

    // }

    public whoAreYou(): string {
        return `Hi I'm ${this.name()}`;
    }

    private name(): string {
        return `${this.firstName} ${this.lastName}`;
    }


}
