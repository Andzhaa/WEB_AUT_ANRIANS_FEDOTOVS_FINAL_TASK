import { AutomationPracticePage } from "../PgaeObjects/AutomationPracticePage"

describe('final work tests', () => {
  it('passes', () => {
    AutomationPracticePage.visit();
    //Input name
    AutomationPracticePage.firstNameField.type("Janka");
    //Input last name
    AutomationPracticePage.lastNameField.type("Berzins");
    //input email
    AutomationPracticePage.emailField.type("Janka.B@gmail.com");
    //Selecting gender
    AutomationPracticePage.genderChoice.contains("Male").click();
    //Input mobile number
    AutomationPracticePage.mobileFiled.type("1234567890");
    //Picking the date of birht
    AutomationPracticePage.dateOfBirth.click();
    AutomationPracticePage.birthMonth.select("February");
    AutomationPracticePage.birthYear.select("1930");
    AutomationPracticePage.birthWidget.filter('[aria-label*="February 28th"]').click();
    //Input subjects
    AutomationPracticePage.subjectsField.type("Economics{enter}");
    //Choosing hobbies
    AutomationPracticePage.hobbiesCheckBox.contains("Music").click();
    //Picture
    AutomationPracticePage.pictureUpload.selectFile("cypress/files/image.png");
    //Address input
    AutomationPracticePage.addressField.type("Something something street 13");
    //Choosing state
    AutomationPracticePage.stateChoice.type("NCR{enter}");
    //Choosing city
    AutomationPracticePage.cityChoice.type("Delhi{enter}");
    //Submit
    AutomationPracticePage.submitButton.click();
    //Validation
    AutomationPracticePage.checkingTable.contains("td", "Student Name").next().should("contain.text", "Janka Berzins");
    AutomationPracticePage.checkingTable.contains("td", "Student Email").next().should("contain.text", "Janka.B@gmail.com");
    AutomationPracticePage.checkingTable.contains("td", "Gender").next().should("contain.text", "Male");
    AutomationPracticePage.checkingTable.contains("td", "Mobile").next().should("contain.text", "1234567890");
    AutomationPracticePage.checkingTable.contains("td", "Date of Birth").next().should("contain.text", "28 February,1930");
    AutomationPracticePage.checkingTable.contains("td", "Subjects").next().should("contain.text", "Economics");
    AutomationPracticePage.checkingTable.contains("td", "Hobbies").next().should("contain.text", "Music");
    AutomationPracticePage.checkingTable.contains("td", "Picture").next().should("contain.text", "image.png");
    AutomationPracticePage.checkingTable.contains("td", "Address").next().should("contain.text", "Something something street 13");
    AutomationPracticePage.checkingTable.contains("td", "State and City").next().should("contain.text", "NCR Delhi");
  })
})