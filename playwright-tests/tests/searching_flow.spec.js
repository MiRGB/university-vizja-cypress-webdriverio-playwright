// @ts-check
import { test, expect } from "@playwright/test";
import HomePage from "page-objects/HomePage";
import SearchingPage from "page-objects/SearchingPage";
import { url, urlFragment } from "../fixtures/data.json";

test('Searching flow', async ({page}) => {
    // Instantiate page objects
    const homePage = new HomePage(page);
    const searchingPage = new SearchingPage(page);

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

// Defines search parameters

    // Scroll to the "Find your field of study" section
    await expect(homePage.searchStudyField).toBeVisible({ timeout: 5000 });
    await homePage.scrollToSearchStudyField();

    // Select "Master of Engineering" from the degree dropdown
    await homePage.openChooseDegree();
    await expect(homePage.masterOfEngBtn).toBeVisible({ timeout: 5000 });
    await homePage.selectMasterOfEng();

    // Verify the selected degree
    await expect(homePage.masterOfEngLabel).toBeVisible({ timeout: 5000 });

    // Select "full-time" from the mode dropdown
    await homePage.openChooseModes();
    await expect(homePage.fullTimeBtn).toBeVisible({ timeout: 5000 });
    await homePage.selectFullTime();

    // Verify the selected mode
    await expect(homePage.fullTimeLabel).toBeVisible({ timeout: 5000 });

// Performs the first search

    // Click the search button
    await homePage.searchClick();

    // Verify the search result appears
    await expect(searchingPage.searchResultsTitle).toBeVisible({ timeout: 5000 });

    // Verify selected term has correct background color
    await expect(searchingPage.masterOfEngFilter).toBeVisible({ timeout: 5000 });
    await searchingPage.masterOfEngFilter.scrollIntoViewIfNeeded();

    const backgroundColor = await searchingPage.masterOfEngFilter.evaluate(el => getComputedStyle(el).backgroundColor);
    await expect(backgroundColor).toBe('rgb(74, 74, 73)');

// Verifies filtering via the left sidebar

    // Select an invalid filter option
    await searchingPage.clickArchitectureFilter();

    // Verify that the selection is highlighted
    await expect(searchingPage.architectureFilter).toBeVisible({ timeout: 5000 });

    let architectureBgColor = await searchingPage.architectureFilter.evaluate(el => getComputedStyle(el).backgroundColor);
    await expect(architectureBgColor).toBe('rgb(74, 74, 73)');

    // Verify that no results are found
    await expect(searchingPage.searchResultsTitle).toHaveCount(0);

    // Clear the invalid filter
    await searchingPage.clickArchitectureFilter();

    // Verify that the filter is deselected
    await expect(searchingPage.architectureFilter).toBeVisible({ timeout: 5000 });

    architectureBgColor = await searchingPage.architectureFilter.evaluate(el => getComputedStyle(el).backgroundColor);
    await expect(architectureBgColor).toBe('rgba(0, 0, 0, 0)');
});
