import HomePage from "../../pages/HomePage";
import SearchingPage from "../../pages/SearchingPage";
import WebApplicationsPage from "../../pages/WebApplicationsPage";
import { url, urlFragment } from "../../fixtures/data.json";

describe('Study field flow', () => {
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

    it('navigates to the web applications page', async () => {
        // Open the Computer Science subject page
        HomePage.openComputerScienceInfo();

        // Verify that the "Engineer" label is visible
        await SearchingPage.engineerLabel.waitForDisplayed({ timeout: 5000 });
        await expect(SearchingPage.engineerLabel).toBeDisplayed();

        // Scroll to the "Web Applications" section and open it
        await SearchingPage.scrollAndOpenWebApp();

        // Verify the Web Applications page has loaded
        await WebApplicationsPage.webAppTitle.waitForDisplayed({ timeout: 5000 });
        await expect(WebApplicationsPage.webAppTitle).toBeDisplayed();
    });

    it('checks subjects for selected semesters', async () => {
        // Scroll to and select the second semester
        await (await WebApplicationsPage.firstYearDesc).scrollIntoView();
        await WebApplicationsPage.openSecondSemester();

        // Verify a subject from the second semester is visible
        await WebApplicationsPage.electronicsSubject.waitForDisplayed({ timeout: 5000 });
        await expect(WebApplicationsPage.electronicsSubject).toBeDisplayed();

        // Scroll to and select the fourth semester
        await (await WebApplicationsPage.secondYearDesc).scrollIntoView();
        await WebApplicationsPage.openFourthSemester();

        // Verify a subject from the fourth semester is visible
        await WebApplicationsPage.softwareEngSubject.waitForDisplayed({ timeout: 5000 });
        await expect(WebApplicationsPage.softwareEngSubject).toBeDisplayed();
    });

    it('opens and closes the sports scholarships panel', async () => {
        // Scroll to the scholarships section and open the panel
        await WebApplicationsPage.scholarshipsDetails.scrollIntoView();
        await WebApplicationsPage.clickSportsScholarshipsLabel();

        // Verify the panel is visible
        await WebApplicationsPage.sportsScholarshipPanel.waitForDisplayed({ timeout: 5000 });
        await expect(WebApplicationsPage.sportsScholarshipPanel).toBeDisplayed();

        // Close the panel
        await WebApplicationsPage.clickSportsScholarshipsLabel();

        // Verify the panel is no longer visible
        await WebApplicationsPage.sportsScholarshipPanel.waitForDisplayed({ timeout: 5000, reverse: true });
        await expect(WebApplicationsPage.sportsScholarshipPanel).not.toBeDisplayed();
    });
});