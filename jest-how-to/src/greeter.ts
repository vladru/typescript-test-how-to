export class Greeter {

    private readonly greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet(): string {
        return "Hello, " + this.greeting;
    }

    sayHi(): void {
        console.log("Hi!")
    }
}
