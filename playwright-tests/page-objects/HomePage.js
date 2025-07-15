class HomePage {
    constructor(page) {
        this.page = page;
    }

    get cookiesWindow() {
        return this.page.locator('div[data-cky-tag="notice"]');
    }

    get rejectCookiesBtn() {
        return this.page.locator('button[data-cky-tag="reject-button"]');
    }

    async rejectCookies() {
        await this.rejectCookiesBtn.click();
    }

    get popupWindow() {
        return this.page.locator('a[class="popup-action"]');
    }

    get closePopupBtn() {
        return this.page.locator('.popup-close');
    }

    async closePopup() {
        await this.closePopupBtn.click();
    }

    get computerScienceInfo() {
        return this.page.locator('a[aria-label="Check our subject offer Computer Science (Informatics)"]').nth(0);
    }

    async openComputerScienceInfo() {
        await this.computerScienceInfo.click();
    }

    get searchStudyField() {
        return this.page.locator('.fields-wrapper');
    }

    async scrollToSearchStudyField() {
        await this.searchStudyField.scrollIntoViewIfNeeded();
    }

    get chooseDegreeBtn() {
        return this.page.locator('input[aria-label="Choose degree"]');
    }

    async openChooseDegree() {
        await this.chooseDegreeBtn.click();
    }

    get masterOfEngBtn() {
        return this.page.getByRole('option', { name: 'Master of Engineering' });
    }

    async selectMasterOfEng() {
        await this.masterOfEngBtn.click();
    }

    get masterOfEngLabel() {
        return this.page.locator('li[title="Master of Engineering"]');
    }

    get chooseModesBtn() {
        return this.page.locator('input[aria-label="Choose modes"]');
    }

    async openChooseModes() {
        await this.chooseModesBtn.click();
    }

    get fullTimeBtn() {
        return this.page.getByRole('option', { name: 'full-time' });
    }

    async selectFullTime() {
        await this.fullTimeBtn.click();
    }
    
    get fullTimeLabel() {
        return this.page.locator('li[title="full-time"]');
    }

    get searchBtn() {
        return this.page.locator('input[value="Search"]');
    }

    async searchClick() {
        await this.searchBtn.click();
    }
    
    get menuBtn() {
        return this.page.locator('#showmenu');
    }

    async openMenu() {
        await this.menuBtn.click();
    }

    get alumniClubLabel() {
        return this.page.locator('a[data-text="Alumni club VIZJA"]');
    }

    async openAlumniClubPage() {
        await this.alumniClubLabel.click();
    }

}

export default HomePage;