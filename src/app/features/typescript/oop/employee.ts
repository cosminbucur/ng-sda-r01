import { VirtualTimeScheduler } from 'rxjs';

// class
export class Employee {

    // filed
    firstName: string;
    lastName: string;
    private age: number;

    // constructor
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        console.log(`Employee ${this.firstName} ${this.lastName} created.`);
    }

    // methods

    // accessor name(): return type { code }
    public publicMethod(): void {
        console.log('public business');

        // call private method
        this.privateMethod();

        this.methodWithParameter(3);
        this.methodWithParameter(3, 1);
    }

    private privateMethod(): string {
        return 'private message';
    }

    private methodWithParameter(count: number, counter?: number): number {
        return counter + count * 2;
    }

    // getter
    get getAge(): number {
        return this.age;
    }

    // setter
    set addToAge(value: number) {
        this.age += value;
    }
}
