export class BaseClass {

    constructor(baseValue) {
        this.baseValue = baseValue;
    }

    async enterText(element, value) {
        await element.waitFor({ state: "visible" });
        await element.fill(value);
    }

    async clickIt(element) {
        await element.waitFor({ state: "visible" });
        await element.click();
    }
}