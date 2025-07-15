import HomePage from "../../pages/HomePage";
import AlumniAssociationPage from "../../pages/AlumniAssociationPage";
import { url, urlFragment, name, lastName, studiesType, birthDay, birthMonth, birthYear, birthDate } from "../../fixtures/data.json";

describe('Alumni association flow', () => {
    it('opens the home page', async () => {
        // Open the home page and verify the URL
        await browser.url(url);
        await expect(await browser.getUrl()).toContain(urlFragment);

        // Reject cookies
        await HomePage.cookiesWindow.waitForDisplayed({ timeout: 10000 });
        await HomePage.rejectCookies();

        // Close popup
        await HomePage.popupWindow.waitForDisplayed({ timeout: 10000 });
        await HomePage.closePopup();
    });

    it('opens the menu and navigates to the alumni association page', async () => {
        // Open the menu
        await HomePage.openMenu();

        // Verify the menu item is visible
        await HomePage.alumniClubLabel.waitForDisplayed({ timeout: 5000 });
        await expect(HomePage.alumniClubLabel).toBeDisplayed();

        // Navigate to the Alumni Association page
        await HomePage.openAlumniClubPage();
        await expect(AlumniAssociationPage.alumniClubTitle).toBeExisting();
    });

    it('fills and verifies input fields', async () => {
        // Scroll to the input fields section
        await AlumniAssociationPage.scrollToNameInput();

        // Enter name and surname
        await AlumniAssociationPage.typeName(name);
        await AlumniAssociationPage.typeLastName(lastName);

        // Verify name and surname values
        await expect(AlumniAssociationPage.nameInput).toHaveValue(name);
        await expect(AlumniAssociationPage.lastNameInput).toHaveValue(lastName);

        // Select type of studies
        await AlumniAssociationPage.selectTypeOfStudies(studiesType);

        // Verify selected value
        await expect(AlumniAssociationPage.typeOfStudiesSelect).toHaveValue(studiesType);

        // Enter date of birth
        await AlumniAssociationPage.typeBirthDate(birthDay);
        await AlumniAssociationPage.typeBirthDate(birthMonth);
        await AlumniAssociationPage.typeBirthDate(birthYear);

        // Verify date of birth value
        await expect(AlumniAssociationPage.birthDateInput).toHaveValue(birthDate);
    });

    it('verifies the disabled attribute of the send button', async () => {
        // Scroll to the consent section
        await AlumniAssociationPage.consentClauses.waitForDisplayed({ timeout: 5000 });
        await AlumniAssociationPage.scrollToConsentClauses();

        // Verify the send button is disabled before checkboxes are checked
        await expect(AlumniAssociationPage.sendBtn).toBeDisabled();

        // Check all required checkboxes and verify
        await AlumniAssociationPage.checkConsentToUse();
        await expect(AlumniAssociationPage.consentToUseCheckbox).toBeChecked();

        await AlumniAssociationPage.checkConsentToTerms();
        await expect(AlumniAssociationPage.consentToTermsCheckbox).toBeChecked();

        await AlumniAssociationPage.checkConsentToProcessing();
        await expect(AlumniAssociationPage.consentToProcessingCheckbox).toBeChecked();

        // Verify the send button is enabled after checkboxes are checked
        await expect(AlumniAssociationPage.sendBtn).not.toBeDisabled();
    });
});
