export class DemoSet {

    public testSets(): void {
        const set = new Set();
        set.add('APPLE');
        set.add('ORANGE');
        set.add('MANGO>');

        const set2 = new Set()
            .add('APPLE')
            .add('ORANGE')
            .add('MANGO>');

        const set3 = new Set(['APPLE', 'ORANGE', 'MANGO']);

        console.log(set.has('APPLE'));

        set.delete('APPLE');
        console.log(set.size);

        set.clear();
        console.log(set.size);

        for (const entry of set2) {
            console.log(entry);
        }
    }
}
