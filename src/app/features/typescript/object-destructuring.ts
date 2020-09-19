export class DemoObjectDestructuring {

    public objectDestructuring(): void {
        const jon = {
            firstName: 'Jon',
            lastName: 'Snow',
            age: 35
        };

        // before ES6
        const firstName = jon.firstName;
        console.log(firstName);

        // after ES6
        const {
            firstName: destructuredFirstName,
            lastName: destructuredLastName
        } = jon;
        console.log(destructuredLastName);  // Snow
    }

    public arrayDestructuring(): void {
        const myArray = ['first', 'second'];
        const [x, y] = myArray;
        console.log(x); // first
        console.log(y); // second
    }
}
