class AlumniAssociationPage {
    get alumniClubTitle() {
        return $('span=The Alumni Association');
    }

    get nameInput() {
        return $('input[name="your-name"]');
    }

    async scrollToNameInput() {
        await browser.execute((selector) => {
            const el = document.querySelector(selector);
            if (el) {
                const rect = el.getBoundingClientRect();
                window.scrollBy(0, rect.top);
            }
        }, 'input[name="your-name"]');
    }

    async typeName(text) {
        await this.nameInput.setValue(text);
    }

    get lastNameInput() {
        return $('input[name="your-last-name"]');
    }

    async typeLastName(text) {
        await this.lastNameInput.setValue(text);
    }

    get typeOfStudiesSelect() {
        return $('select[name="your-type-of-studies"]');
    }

    async selectTypeOfStudies(text) {
        await this.typeOfStudiesSelect.selectByVisibleText(text);
    }

    get birthDateInput() {
        return $('input[name="your-date"]');
    }

    async typeBirthDate(text) {
        await this.birthDateInput.setValue(text);
    }

    get consentClauses() {
        return $('p=CONSENT CLAUSES:');
    }

    async scrollToConsentClauses() {
        await this.consentClauses.scrollIntoView();
    }

    get sendBtn() {
        return $('input[value="send"]');
    }

    get consentToUseCheckbox() {
        return $('input[name="your-zgoda-przetwarzanie"]');
    }

    async checkConsentToUse() {
        await this.consentToUseCheckbox.click();
    }

    get consentToTermsCheckbox() {
        return $('input[name="your-zgoda-regulamin"]');
    }

    async checkConsentToTerms() {
        await this.consentToTermsCheckbox.click();
    }

    get consentToProcessingCheckbox() {
        return $('input[name="your-zgoda-wykorzystanie-przetwarzanie"]');
    }

    async checkConsentToProcessing() {
        await this.consentToProcessingCheckbox.click();
    }

}

export default new AlumniAssociationPage();