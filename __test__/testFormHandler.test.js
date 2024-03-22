// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler";

// Mocking the document.getElementById function
document.getElementById = jest.fn(() => ({ value: 'Picard' }));

// Mocking the Client module
import * as Client from "../src/client/js/nameChecker";
Client.checkForName = jest.fn();

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        // Define the event object
        const event = { preventDefault: jest.fn() };

        // Call the handleSubmit function
        handleSubmit(event);

        // Expectations
        expect(event.preventDefault).toHaveBeenCalledTimes(1);
        expect(Client.checkForName).toHaveBeenCalledWith('Picard');
        expect(console.log).toHaveBeenCalledWith("::: Form Submitted :::");
    });
});
