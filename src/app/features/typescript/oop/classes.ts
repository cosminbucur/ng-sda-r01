import { Human } from './human';
import { Student } from './student';
import { Person } from './person';
export class DemoClasses {

    public classInstance(): void {
        const jon = new Person('jon', 'snow');
        console.log(jon.whoAreYou());

        const danny = new Student('daenerys', 'targarien', 'Angular 10');
        console.log(danny.whoAreYou());
    }
}
