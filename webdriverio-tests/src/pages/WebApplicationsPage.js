class WebApplicationsPage {
    get webAppTitle() {
        return $('h1=Web Applications');
    }

    get firstYearDesc() {
        return $$('div .year-description')[0];
    }

    get secondSemesterBtn() {
        return $('#by0tab-2');
    }

    async openSecondSemester() {
        await this.secondSemesterBtn.click();
    }

    get electronicsSubject() {
        return $('td=Electronics for computer scientists');
    }

    get secondYearDesc() {
        return $$('div .year-description')[1];
    }

    get fourthSemesterBtn() {
        return $('#by1tab-2');
    }

    async openFourthSemester() {
        await this.fourthSemesterBtn.click();
    }

    get softwareEngSubject() {
        return $('td=Software engineering');
    }

    get scholarshipsDetails() {
        return $('.details');
    }

    get sportsScholarshipsLabel() {
        return $('#stypaccordion-header-a2');
    }

    async clickSportsScholarshipsLabel() {
        await this.sportsScholarshipsLabel.click();

    }

    get sportsScholarshipPanel() {
        return $('#stypaccordion-panel-a2');
    }

}

export default new WebApplicationsPage();