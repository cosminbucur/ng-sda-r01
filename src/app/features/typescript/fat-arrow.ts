export class DemoFatArrow {

    public testFatArrow(): void {
        setTimeout(() => {
            console.log('setTimeoutCalled');
        }, 1000);
    }

    public testFatArrowWithArguments(): void {
        const multiply = function (a, b) {
            return a * b;
        };

        const newMultiply = (a, b) => a * b;
    }

}
