/// <reference types="cypress" />

import HomePage from "../pages/HomePage";
import SearchingPage from "../pages/SearchingPage";
import WebApplicationsPage from "../pages/WebApplicationsPage";
import { url, urlFragment } from "../fixtures/data.json";

describe('Study field flow', () => {
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

    it('navigates to the web applications page', () => {
        // Open the Computer Science subject page
        HomePage.openComputerScienceInfo();

        // Verify that the "Engineer" label is visible
        SearchingPage.engineerLabel.should('be.visible');

        // Scroll to the "Web Applications" section and open it
        SearchingPage.scrollAndOpenWebApp();

        // Verify the Web Applications page has loaded
        WebApplicationsPage.webAppTitle.should('be.visible');
    });

    it('checks subjects for selected semesters', () => {
        // Scroll to and select the second semester
        WebApplicationsPage.firstYearDesc.scrollIntoView();
        WebApplicationsPage.openSecondSemester();

        // Verify a subject from the second semester is visible
        WebApplicationsPage.electronicsSubject.should('be.visible');

        // Scroll to and select the fourth semester
        WebApplicationsPage.secondYearDesc.scrollIntoView();
        WebApplicationsPage.openFourthSemester();

        // Verify a subject from the fourth semester is visible
        WebApplicationsPage.softwareEngSubject.should('be.visible');
    });

    it('opens and closes the sports scholarships panel', () => {
        // Scroll to the scholarships section and open the panel
        WebApplicationsPage.scholarshipsDetails.scrollIntoView();
        WebApplicationsPage.clickSportsScholarshipsLabel();

        // Verify the panel is visible
        WebApplicationsPage.sportsScholarshipPanel.should('be.visible');

        // Close the panel
        WebApplicationsPage.clickSportsScholarshipsLabel();

        // Verify the panel is no longer visible
        WebApplicationsPage.sportsScholarshipPanel.should('not.be.visible');
    });
});
