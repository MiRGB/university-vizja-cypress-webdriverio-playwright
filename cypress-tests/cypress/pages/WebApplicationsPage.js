class WebApplicationsPage {
    get webAppTitle() {
        return cy.contains('h1', 'Web Applications');
    }

    get firstYearDesc() {
        return cy.get('div .year-description').eq(0);
    }

    get secondSemesterBtn() {
        return cy.get('#by0tab-2');
    }

    openSecondSemester() {
        this.secondSemesterBtn.click();
    }

    get electronicsSubject() {
        return cy.contains('td', 'Electronics for computer scientists');
    }

    get secondYearDesc() {
        return cy.get('div .year-description').eq(1);
    }

    get fourthSemesterBtn() {
        return cy.get('#by1tab-2');
    }

    openFourthSemester() {
        this.fourthSemesterBtn.click();
    }

    get softwareEngSubject() {
        return cy.contains('td', 'Software engineering');
    }

    get scholarshipsDetails() {
        return cy.get('.details');
    }

    get sportsScholarshipsLabel() {
        return cy.get('#stypaccordion-header-a2');
    }

    clickSportsScholarshipsLabel() {
        this.sportsScholarshipsLabel.click();

    }

    get sportsScholarshipPanel() {
        return cy.get('#stypaccordion-panel-a2');
    }
}

export default new WebApplicationsPage();