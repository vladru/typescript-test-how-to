export class B {

    private readonly name: string;
    private readonly location: string;

    constructor({ name, location }: Record<string, string>) {
        this.name = name;
        this.location = location
    }

    introduce(): string {
        return this.name;

    }
    locate(): string {
        return this.location;
    }

}
