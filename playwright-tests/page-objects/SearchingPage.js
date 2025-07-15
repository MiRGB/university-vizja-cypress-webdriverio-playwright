class SearchingPage {
    constructor(page) {
        this.page = page;
    }

    get engineerLabel() {
        return this.page.getByRole('heading', { name: 'Computer Science (Informatics) Artificial Intelligence Engineer' }).locator('span').nth(1);
    }

    get webAppImg() {
        return this.page.locator('img[alt="Web Applications"]');
    }

    async scrollAndOpenWebApp() {
        await this.webAppImg.scrollIntoViewIfNeeded();
        await this.webAppImg.click();
    }

    get searchResultsTitle() {
        return this.page.getByRole('heading', { name: 'Production Engineering and Management for people with an engineering degree' });
    }

    get masterOfEngFilter() {
        return this.page.locator('label[for="term-96"]');
    }

    get architectureFilter() {
        return this.page.locator('label[for="term-161"]');
    }

    async clickArchitectureFilter() {
        await this.architectureFilter.click();
    }

}

export default SearchingPage;