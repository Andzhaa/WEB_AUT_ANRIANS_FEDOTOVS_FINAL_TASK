import { BasePage } from "./BasePage"

export class AutomationPracticePage extends BasePage {
    static get url() {
        return "https://demoqa.com/automation-practice-form";
    }

    static get firstNameField() {
        return cy.get("#firstName");
    }

    static get lastNameField() {
        return cy.get("#lastName");
    }

    static get emailField() {
        return cy.get("#userEmail");
    }

    static get genderChoice() {
        return cy.get("#genterWrapper");
    }

    static get mobileFiled() {
        return cy.get("#userNumber");
    }

    static get dateOfBirth() {
        return cy.get("#dateOfBirthInput");
    }

    static get birthWidget() {
        return cy.get(".react-datepicker__day");
    }

    static get birthYear() {
        return cy.get(".react-datepicker__year-select");
    }

    static get birthMonth() {
        return cy.get(".react-datepicker__month-select");
    }

    static get subjectsField() {
        return cy.get("#subjectsInput");
    }
    

    static get hobbiesCheckBox() {
        return cy.get("#hobbiesWrapper");
    }

    static get pictureUpload() {
        return cy.get("#uploadPicture");
    }

    static get addressField() {
        return cy.get("#currentAddress");
    }

    static get stateChoice() {
        return cy.get("#state");
    }

    static get cityChoice() {
        return cy.get("#city");
    }

    static get submitButton() {
        return cy.get("#submit");
    }

    static get checkingTable() {
        return cy.get("table");
    }
}