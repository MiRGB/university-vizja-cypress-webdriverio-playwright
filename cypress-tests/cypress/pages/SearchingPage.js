class SearchingPage {
    get engineerLabel() {
        return cy.contains('span', 'Engineer');
    }

    get webAppImg() {
        return cy.get('img[alt="Web Applications"]');
    }

    scrollAndOpenWebApp() {
        this.webAppImg.scrollIntoView().click();
    }

    get searchResultsTitle() {
        return cy.contains('h3', 'Production Engineering and Management for people with an engineering degree');
    }

    get masterOfEngFilter() {
        return cy.get('label[for="term-96"]');
    }

    get architectureFilter() {
        return cy.get('label[for="term-161"]');
    }

    clickArchitectureFilter() {
        this.architectureFilter.click();
    }

}

export default new SearchingPage();