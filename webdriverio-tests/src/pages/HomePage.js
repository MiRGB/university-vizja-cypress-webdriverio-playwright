class HomePage {
    get cookiesWindow() {
        return $('div[data-cky-tag="notice"]');
    }

    get rejectCookiesBtn() {
        return $('button[data-cky-tag="reject-button"]');
    }

    async rejectCookies() {
        await this.rejectCookiesBtn.click();
    }

    get popupWindow() {
        return $('a[class="popup-action"]');
    }

    get closePopupBtn() {
        return $('.popup-close');
    }

    async closePopup() {
        await this.closePopupBtn.click();
    }

    get computerScienceInfo() {
        return $('a[aria-label="Check our subject offer Computer Science (Informatics)"]');
    }

    async openComputerScienceInfo() {
        await this.computerScienceInfo.click();
    }

    get searchStudyField() {
        return $('.fields-wrapper');
    }

    async scrollToSearchStudyField() {
        await this.searchStudyField.scrollIntoView();
    }

    get chooseDegreeBtn() {
        return $('input[aria-label="Choose degree"]');
    }

    async openChooseDegree() {
        await this.chooseDegreeBtn.click();
    }

    get masterOfEngBtn() {
        return $('li=Master of Engineering');
    }

    async selectMasterOfEng() {
        await this.masterOfEngBtn.click();
    }

    get masterOfEngLabel() {
        return $('li[title="Master of Engineering"]');
    }

    get chooseModesBtn() {
        return $('input[aria-label="Choose modes"]');
    }

    async openChooseModes() {
        await this.chooseModesBtn.click();
    }

    get fullTimeBtn() {
        return $('li=full-time');
    }

    async selectFullTime() {
        await this.fullTimeBtn.click();
    }

    get fullTimeLabel() {
        return $('li[title="full-time"]');
    }

    get searchBtn() {
        return $('input[value="Search"]');
    }

    async searchClick() {
        await this.searchBtn.click();
    }
    
    get menuBtn() {
        return $('#showmenu');
    }

    async openMenu() {
        await this.menuBtn.click();
    }

    get alumniClubLabel() {
        return $('a[data-text="Alumni club VIZJA"]');
    }

    async openAlumniClubPage() {
        await this.alumniClubLabel.click();
    }
}

export default new HomePage();