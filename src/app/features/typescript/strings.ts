export class DemoStrings {

    public templateStrings(): void {
        // back ticks
        const multiLineString = `
            this
            is
            a
            multi
            line
            string
        `;
        console.log(multiLineString);
    }

    public variableSubstitution(): void {
        const firstName = 'Jon';
        const lastName = 'Snow';
        const fullName = `This is ${firstName} ${lastName}`;
        console.log(fullName);
    }
}
