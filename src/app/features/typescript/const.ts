export class DemoConst {

    public testConst(): void {
        const treshold = 2;     // imutable

        // const range;    // syntax error

        // treshold = 3;   // error
    }

    public mutateObject(): void {
        const myReference = {};

        myReference['myProperty'] = 'hello';
        console.log(myReference);
    }

    public makeObjectImmutable(): void {
        const immutableObject = Object.freeze({ immutableProperty: 2 });
        // immutableObject.immutableProperty = 3;  // compile error
        // immutableObject.newProperty = 12;   // compile error
        console.log(immutableObject);
    }

}