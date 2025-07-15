class HomePage {
    get cookiesWindow() {
        return cy.get('div[data-cky-tag="notice"]');
    }

    get rejectCookiesBtn() {
        return cy.get('button[data-cky-tag="reject-button"]');
    }

    rejectCookies() {
        this.rejectCookiesBtn.click();
    }

    get popupWindow() {
        return cy.get('a[class="popup-action"]');
    }

    get closePopupBtn() {
        return cy.get('.popup-close');
    }

    closePopup() {
        this.closePopupBtn.click();
    }

    get computerScienceInfo() {
        return cy.get('a[aria-label="Check our subject offer Computer Science (Informatics)"]').eq(0);
    }

    openComputerScienceInfo() {
        this.computerScienceInfo.click();
    }

    get searchStudyField() {
        return cy.get('.fields-wrapper');
    }

    scrollToSearchStudyField() {
        this.searchStudyField.scrollIntoView();
    }

    get chooseDegreeBtn() {
        return cy.get('input[aria-label="Choose degree"]');
    }

    openChooseDegree() {
        this.chooseDegreeBtn.click();
    }

    get masterOfEngBtn() {
        return cy.contains('li', 'Master of Engineering');
    }

    selectMasterOfEng() {
        this.masterOfEngBtn.click();
    }

    get masterOfEngLabel() {
        return cy.get('li[title="Master of Engineering"]');
    }

    get chooseModesBtn() {
        return cy.get('input[aria-label="Choose modes"]');
    }

    openChooseModes() {
        this.chooseModesBtn.click();
    }

    get fullTimeBtn() {
        return cy.contains('li', 'full-time');
    }

    selectFullTime() {
        this.fullTimeBtn.click();
    }

    get fullTimeLabel() {
        return cy.get('li[title="full-time"]');
    }

    get searchBtn() {
        return cy.get('input[value="Search"]');
    }

    searchClick() {
        this.searchBtn.click();
    }

    get menuBtn() {
        return cy.get('#showmenu');
    }

    openMenu() {
        this.menuBtn.click();
    }

    get alumniClubLabel() {
        return cy.get('a[data-text="Alumni club VIZJA"]');
    }

    openAlumniClubPage() {
        this.alumniClubLabel.click();
    }

}

export default new HomePage();