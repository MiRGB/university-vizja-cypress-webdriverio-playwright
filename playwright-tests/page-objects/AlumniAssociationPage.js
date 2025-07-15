class AlumniAssociationPage {
    constructor(page) {
        this.page = page;
    }

    get alumniClubTitle() {
        return this.page.getByText('The Alumni Association', { exact: true });
    }

    get nameInput() {
        return this.page.locator('input[name="your-name"]');
    }

    async scrollToNameInput() {
        await this.nameInput.scrollIntoViewIfNeeded();
    }

    async typeName(text) {
        await this.nameInput.waitFor();
        await this.nameInput.fill(text);
    }

    get lastNameInput() {
        return this.page.locator('input[name="your-last-name"]');
    }

    async typeLastName(text) {
        await this.lastNameInput.waitFor();
        await this.lastNameInput.fill(text);
    }

    get typeOfStudiesSelect() {
        return this.page.locator('select[name="your-type-of-studies"]');
    }

    async selectTypeOfStudies(text) {
        await this.page.selectOption('select[name="your-type-of-studies"]', { label: text });
    }

    get birthDateInput() {
        return this.page.locator('input[name="your-date"]');
    }

    async typeBirthDate(text) {
        await this.birthDateInput.waitFor();
        await this.birthDateInput.fill(text);
    }

    get consentClauses() {
        return this.page.locator('p', { hasText: 'CONSENT CLAUSES:' });
    }

    async scrollToConsentClauses() {
        await this.consentClauses.scrollIntoViewIfNeeded();
    }

    get sendBtn() {
        return this.page.locator('input[value="send"]');
    }
    
    get consentToUseCheckbox() {
        return this.page.locator('input[name="your-zgoda-przetwarzanie"]');
    }

    async checkConsentToUse() {
        await this.consentToUseCheckbox.click();
    }

    get consentToTermsCheckbox() {
        return this.page.locator('input[name="your-zgoda-regulamin"]');
    }

    async checkConsentToTerms() {
        await this.consentToTermsCheckbox.click();
    }

    get consentToProcessingCheckbox() {
        return this.page.locator('input[name="your-zgoda-wykorzystanie-przetwarzanie"]');
    }

    async checkConsentToProcessing() {
        await this.consentToProcessingCheckbox.click();
    }

}

export default AlumniAssociationPage;