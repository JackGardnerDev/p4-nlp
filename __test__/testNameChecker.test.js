import { checkForName } from "../src/client/js/nameChecker";

describe("Testing the nameChecker functionality", () => {
    test("Checking if checkForName function is defined", () => {
        expect(checkForName).toBeDefined();
    });

    test("Testing with a valid name", () => {
        const inputText = "Picard";

        // Mock alert
        global.alert = jest.fn();

        checkForName(inputText);

        expect(alert).toHaveBeenCalledWith("Welcome, Captain!");
    });

    test("Testing with an invalid name", () => {
        const inputText = "Spock";

        // Mock alert
        global.alert = jest.fn();

        checkForName(inputText);

        // Ensure alert was not called
        expect(alert).not.toHaveBeenCalled();
    });
});
