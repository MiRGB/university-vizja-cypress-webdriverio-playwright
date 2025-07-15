/// <reference types="cypress" />

import HomePage from "../pages/HomePage";
import SearchingPage from "../pages/SearchingPage";
import { url, urlFragment } from "../fixtures/data.json";

describe('Searching flow', () => {
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
    
    it('defines search parameters', () => {
        // Scroll to the "Find your field of study" section
        HomePage.scrollToSearchStudyField();
        HomePage.searchStudyField.should('be.visible');

        // Select "Master of Engineering" from the degree dropdown
        HomePage.openChooseDegree();
        HomePage.selectMasterOfEng();

        // Verify the selected degree
        HomePage.masterOfEngLabel.should('exist');

        // Select "full-time" from the mode dropdown
        HomePage.openChooseModes();
        HomePage.selectFullTime();

        // Verify the selected mode
        HomePage.fullTimeLabel.should('exist');
    });

    it('performs the first search', () => {
        // Click the search button
        HomePage.searchClick();

        // Verify the search result appears
        SearchingPage.searchResultsTitle.should('be.visible');

        // Verify selected term has correct background color
        SearchingPage.masterOfEngFilter.should('have.css', 'background-color', 'rgb(74, 74, 73)');
    });

    it('verifies filtering via the left sidebar', () => {
        // Select an invalid filter option
        SearchingPage.clickArchitectureFilter();

        // Verify that the selection is highlighted
        SearchingPage.architectureFilter.should('have.css', 'background-color', 'rgb(74, 74, 73)');

        // Verify that no results are found
        SearchingPage.searchResultsTitle.should('not.exist');

        // Clear the invalid filter
        SearchingPage.clickArchitectureFilter();

        // Verify that the filter is deselected
        SearchingPage.architectureFilter.should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    });
});
