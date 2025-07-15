class SearchingPage {
    get engineerLabel() {
        return $('span=Engineer');
    }

    get webAppImg() {
        return $('img[alt="Web Applications"]');
    }

    async scrollAndOpenWebApp() {
        await this.webAppImg.scrollIntoView();
        await this.webAppImg.click();
    }

    get searchResultsTitle() {
        return $('h3=Production Engineering and Management for people with an engineering degree');
    }

    get masterOfEngFilter() {
        return $('label[for="term-96"]');
    }

    get architectureFilter() {
        return $('label[for="term-161"]');
    }

    async clickArchitectureFilter() {
        await this.architectureFilter.click();
    }

}

export default new SearchingPage();