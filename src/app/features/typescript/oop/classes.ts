import { Person } from './person';
export class DemoClasses {

    public classInstance(): void {
        const jon = new Person('jon', 'snow');
        console.log(jon.whoAreYou());
    }
}
