// @ts-check
import { test, expect } from "@playwright/test";
import HomePage from "page-objects/HomePage";
import SearchingPage from "page-objects/SearchingPage";
import WebApplicationsPage from "page-objects/WebApplicationsPage";
import { url, urlFragment } from "../fixtures/data.json";

test('Study field flow', async ({page}) => {
    // Instantiate page objects
    const homePage = new HomePage(page);
    const searchingPage = new SearchingPage(page);
    const webApplicationsPage = new WebApplicationsPage(page);

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

// Navigates to the web applications page

    // Open the Computer Science subject page
    await homePage.openComputerScienceInfo();

    // Verify that the "Engineer" label is visible
    await expect(searchingPage.engineerLabel).toBeVisible({ timeout: 5000 });

    // Scroll to the "Web Applications" section and open it
    await searchingPage.scrollAndOpenWebApp();

    // Verify the Web Applications page has loaded
    await expect(webApplicationsPage.webAppTitle).toBeVisible({ timeout: 5000 });

// Checks subjects for selected semesters

    // Scroll to and select the second semester
    await webApplicationsPage.firstYearDesc.scrollIntoViewIfNeeded();
    await webApplicationsPage.openSecondSemester();

    // Verify a subject from the second semester is visible
    await expect(webApplicationsPage.electronicsSubject).toBeVisible({ timeout: 5000 });

    // Scroll to and select the fourth semester
    await webApplicationsPage.secondYearDesc.scrollIntoViewIfNeeded();
    await webApplicationsPage.openFourthSemester();

    // Verify a subject from the fourth semester is visible
    await expect(webApplicationsPage.softwareEngSubject).toBeVisible({ timeout: 5000 });

// Opens and closes the sports scholarships panel

    // Scroll to the scholarships section and open the panel
    await webApplicationsPage.scholarshipsDetails.scrollIntoViewIfNeeded();
    await webApplicationsPage.clickSportsScholarshipsLabel();

    // Verify the panel is visible
    await expect(webApplicationsPage.sportsScholarshipPanel).toBeVisible({ timeout: 5000 });

    // Close the panel
    await webApplicationsPage.clickSportsScholarshipsLabel();

    // Verify the panel is no longer visible
    await expect(webApplicationsPage.sportsScholarshipPanel).not.toBeVisible({ timeout: 5000 });
});
