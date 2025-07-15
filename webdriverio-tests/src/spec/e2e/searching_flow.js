import HomePage from "../../pages/HomePage";
import SearchingPage from "../../pages/SearchingPage";
import { url, urlFragment } from "../../fixtures/data.json";

describe('Searching flow', () => {
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

    it('defines search parameters', async () => {
        // Scroll to the "Find your field of study" section
        await HomePage.searchStudyField.waitForExist({ timeout: 5000 });
        await HomePage.scrollToSearchStudyField();
        await expect(HomePage.searchStudyField).toBeDisplayed();

        // Select "Master of Engineering" from the degree dropdown
        await HomePage.openChooseDegree();
        await HomePage.masterOfEngBtn.waitForDisplayed({ timeout: 5000 });
        await HomePage.selectMasterOfEng();

        // Verify the selected degree
        await HomePage.masterOfEngLabel.waitForDisplayed({ timeout: 5000 });
        await expect(HomePage.masterOfEngLabel).toBeExisting();

        // Select "full-time" from the mode dropdown
        await HomePage.openChooseModes();
        await HomePage.fullTimeBtn.waitForDisplayed({ timeout: 5000 });
        await HomePage.selectFullTime();

        // Verify the selected mode
        await HomePage.fullTimeLabel.waitForDisplayed({ timeout: 5000 });
        await expect(HomePage.fullTimeLabel).toBeExisting();

    });

    it('performs the first search', async () => {
        // Click the search button
        await HomePage.searchClick();

        // Verify the search result appears
        await SearchingPage.searchResultsTitle.waitForDisplayed({ timeout: 5000 });
        await expect(SearchingPage.searchResultsTitle).toBeDisplayed();

        // Verify selected term has correct background color
        await SearchingPage.masterOfEngFilter.waitForExist({ timeout: 5000 });
        await SearchingPage.masterOfEngFilter.scrollIntoView();

        const masterOfEngBgColor = await SearchingPage.masterOfEngFilter.getCSSProperty('background-color');
        await expect(masterOfEngBgColor.value).toBe('rgba(74,74,73,1)');

    });

    it('verifies filtering via the left sidebar', async () => {
        // Select an invalid filter option
        await SearchingPage.clickArchitectureFilter();

        // Verify that the selection is highlighted
        await SearchingPage.architectureFilter.waitForDisplayed({ timeout: 5000 });

        let architectureBgColor = await SearchingPage.architectureFilter.getCSSProperty('background-color');
        await expect(architectureBgColor.value).toBe('rgba(74,74,73,1)');

        // Verify that no results are found
        await expect(SearchingPage.searchResultsTitle).not.toBeExisting();

        // Clear the invalid filter
        await SearchingPage.clickArchitectureFilter();

        // Verify that the filter is deselected
        await SearchingPage.architectureFilter.waitForDisplayed({ timeout: 5000 });

        architectureBgColor = await SearchingPage.architectureFilter.getCSSProperty('background-color');
        await expect(architectureBgColor.value).toBe('rgba(0,0,0,0)');
    });
});