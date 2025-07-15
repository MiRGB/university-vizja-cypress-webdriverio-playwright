/// <reference types="cypress" />

import HomePage from "../pages/HomePage";
import AlumniAssociationPage from "../pages/AlumniAssociationPage";
import { url, urlFragment, name, lastName, studiesType, birthDate } from "../fixtures/data.json";

describe('Alumni association flow', () => {
    it('opens the home page', () => {
        // Open the home page and verify the URL
        cy.visit(url);
        cy.url().should('include', urlFragment);
        
        // Reject cookies
        HomePage.cookiesWindow.should('be.visible');
        HomePage.rejectCookies();

        // Close popup
        HomePage.popupWindow.should('be.visible');
        HomePage.closePopup();
    });

    it('opens the menu and navigates to the alumni association page', () => {
        // Open the menu
        HomePage.openMenu();

        // Verify the menu item is visible
        HomePage.alumniClubLabel.should('be.visible');
        
        // Navigate to the Alumni Association page
        HomePage.openAlumniClubPage();
        AlumniAssociationPage.alumniClubTitle.should('exist');
    });

    it('fills and verifies input fields', () => {
        // Scroll to the input fields section
        AlumniAssociationPage.scrollToNameInput();

        // Enter name and surname
        AlumniAssociationPage.typeName(name);
        AlumniAssociationPage.typeLastName(lastName);

        // Verify name and surname values
        AlumniAssociationPage.nameInput.should('have.value', name);
        AlumniAssociationPage.lastNameInput.should('have.value', lastName);

        // Select type of studies
        AlumniAssociationPage.selectTypeOfStudies(studiesType);

        // Verify selected value
        AlumniAssociationPage.typeOfStudiesSelect.should('have.value', studiesType);

        // Enter date of birth
        AlumniAssociationPage.typeBirthDate(birthDate);

        // Verify date of birth value
        AlumniAssociationPage.birthDateInput.should('have.value', birthDate);
    });

    it('verifies the disabled attribute of the send button', () => {
        // Scroll to the consent section
        AlumniAssociationPage.scrollToConsentClauses();

        // Verify the send button is disabled before checkboxes are checked
        AlumniAssociationPage.sendBtn.should('be.disabled');

        // Check all required checkboxes and verify
        AlumniAssociationPage.checkConsentToUse();
        AlumniAssociationPage.consentToUseCheckbox.should('be.checked');
        AlumniAssociationPage.checkConsentToTerms();
        AlumniAssociationPage.consentToTermsCheckbox.should('be.checked');
        AlumniAssociationPage.checkConsentToProcessing();
        AlumniAssociationPage.consentToProcessingCheckbox.should('be.checked');

        // Verify the send button is enabled after checkboxes are checked
        AlumniAssociationPage.sendBtn.should('not.be.disabled');
    });
});
