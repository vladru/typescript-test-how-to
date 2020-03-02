import { B } from './class B';

export class A {
    private person: B;

    constructor(params: Record<string, string>) {
        // Do some A things
        // And then do some B things
        const { name, age, location } = params;
        this.person = new B({ name, age, location });
    }

    assertPersonhood(): string {
        return this.person.introduce() + " from " + this.person.locate();
    }

}
