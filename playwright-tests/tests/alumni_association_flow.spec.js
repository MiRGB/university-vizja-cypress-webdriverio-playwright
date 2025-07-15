// @ts-check
import { test, expect } from "@playwright/test";
import HomePage from "page-objects/HomePage";
import AlumniAssociationPage from "page-objects/AlumniAssociationPage";
import { url, urlFragment, name, lastName, studiesType, birthDate } from "../fixtures/data.json";

test('Alumni association flow', async ({page}) => {
    // Instantiate page objects
    const homePage = new HomePage(page);
    const alumniAssociationPage = new AlumniAssociationPage(page);

// Opens the home page

    // Open the home page and verify the URL
    await page.goto(url);
    await expect(page).toHaveURL(new RegExp(urlFragment));

    // Reject cookies
    await expect(homePage.cookiesWindow).toBeVisible({ timeout: 10000 });
    await homePage.rejectCookies();

    // Close popup
    await expect(homePage.popupWindow).toBeVisible({ timeout: 10000 });
    await homePage.closePopup();

// Opens the menu and navigates to the alumni association page

    // Open the menu
    await homePage.openMenu();

    // Verify the menu item is visible
    await expect(homePage.alumniClubLabel).toBeVisible({ timeout: 5000 });

    // Navigate to the Alumni Association page
    await homePage.openAlumniClubPage();
    await expect(alumniAssociationPage.alumniClubTitle).toBeVisible();

// Fills and verifies input fields

    // Scroll to the input fields section
    await alumniAssociationPage.scrollToNameInput();

    // Enter name and surname
    await alumniAssociationPage.typeName(name);
    await alumniAssociationPage.typeLastName(lastName);

    // Verify name and surname values
    await expect(alumniAssociationPage.nameInput).toHaveValue(name);
    await expect(alumniAssociationPage.lastNameInput).toHaveValue(lastName);

    // Select type of studies
    await alumniAssociationPage.typeOfStudiesSelect.waitFor();
    await alumniAssociationPage.selectTypeOfStudies(studiesType);

    // Verify selected value
    await expect(alumniAssociationPage.typeOfStudiesSelect).toHaveValue(studiesType);

    // Enter date of birth
    await alumniAssociationPage.typeBirthDate(birthDate);

    // Verify date of birth value
    await expect(alumniAssociationPage.birthDateInput).toHaveValue(birthDate);

// Verifies the disabled attribute of the send button

    // Scroll to the consent section
    await expect(alumniAssociationPage.consentClauses).toBeVisible({ timeout: 5000 });
    await alumniAssociationPage.scrollToConsentClauses();

    // Verify the send button is disabled before checkboxes are checked
    await expect(alumniAssociationPage.sendBtn).toBeDisabled();

    // Check all required checkboxes and verify
    await alumniAssociationPage.checkConsentToUse();
    await expect(alumniAssociationPage.consentToUseCheckbox).toBeChecked();

    await alumniAssociationPage.checkConsentToTerms();
    await expect(alumniAssociationPage.consentToTermsCheckbox).toBeChecked();

    await alumniAssociationPage.checkConsentToProcessing();
    await expect(alumniAssociationPage.consentToProcessingCheckbox).toBeChecked();

    // Verify the send button is enabled after checkboxes are checked
    await expect(alumniAssociationPage.sendBtn).not.toBeDisabled();
});