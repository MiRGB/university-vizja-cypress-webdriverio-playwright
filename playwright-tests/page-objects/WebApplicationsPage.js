class WebApplicationsPage {
    constructor(page) {
        this.page = page;
    }

    get webAppTitle() {
        return this.page.getByRole('heading', { level: 1, name: 'Web Applications', exact: true });
    }

    get firstYearDesc() {
        return this.page.locator('div .year-description').nth(0);
    }

    get secondSemesterBtn() {
        return this.page.locator('#by0tab-2');
    }

    async openSecondSemester() {
        await this.secondSemesterBtn.click();
    }

    get electronicsSubject() {
        return this.page.getByRole('cell', { name: 'Electronics for computer scientists', exact: true });
    }

    get secondYearDesc() {
        return this.page.locator('div .year-description').nth(1);
    }

    get fourthSemesterBtn() {
        return this.page.locator('#by1tab-2');
    }

    async openFourthSemester() {
        await this.fourthSemesterBtn.click();
    }

    get softwareEngSubject() {
        return this.page.getByRole('cell', { name: 'Software engineering', exact: true });
    }

    get scholarshipsDetails() {
        return this.page.locator('.details');
    }

    get sportsScholarshipsLabel() {
        return this.page.locator('#stypaccordion-header-a2');
    }

    async clickSportsScholarshipsLabel() {
        await this.sportsScholarshipsLabel.click();

    }

    get sportsScholarshipPanel() {
        return this.page.locator('#stypaccordion-panel-a2');
    }

}

export default WebApplicationsPage;