import {Greeter} from "./greeter"

export function handler(): void {
    const greeterInstance = new Greeter("world");
    console.log(greeterInstance.greet());
    greeterInstance.sayHi();
}

((): void => {
    console.log("Module %s loaded.", __filename);
    handler();
    console.log("Module handler has been invoked on module load.")
})();
