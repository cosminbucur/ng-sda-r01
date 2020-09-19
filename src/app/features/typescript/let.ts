export class DemoLet {

    // public for use in html
    // private for use in ts
    public testLocalVariables(): void {
        let numberArray: number[] = [];

        // add 5 numbers to array
        for (let i = 0; i < 5; i++) {
            numberArray.push(i);
        }

        // print all elements
        // (input) -> {do something} consumer
        numberArray.forEach(element => console.log(element));

    }
}
