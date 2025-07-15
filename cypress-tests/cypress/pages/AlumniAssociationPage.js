class AlumniAssociationPage {
    get alumniClubTitle() {
        return cy.contains('span', 'The Alumni Association');
    }

    get nameInput() {
        return cy.get('input[name="your-name"]');
    }

    scrollToNameInput() {
        this.nameInput.scrollIntoView();
    }

    typeName(text) {
        this.nameInput.type(text);
    }

    get lastNameInput() {
        return cy.get('input[name="your-last-name"]');
    }

    typeLastName(text) {
        this.lastNameInput.type(text);
    }

    get typeOfStudiesSelect() {
        return cy.get('select[name="your-type-of-studies"]');
    }

    selectTypeOfStudies(text) {
        this.typeOfStudiesSelect.select(text);
    }

    get birthDateInput() {
        return cy.get('input[name="your-date"]');
    }

    typeBirthDate(text) {
        this.birthDateInput.type(text);
    }

    get consentClauses() {
        return cy.contains('p', 'CONSENT CLAUSES:');
    }

    scrollToConsentClauses() {
        this.consentClauses.scrollIntoView();
    }

    get sendBtn() {
        return cy.get('input[value="send"]');
    }

    get consentToUseCheckbox() {
        return cy.get('input[name="your-zgoda-przetwarzanie"]');
    }

    checkConsentToUse() {
        this.consentToUseCheckbox.check();
    }

    get consentToTermsCheckbox() {
        return cy.get('input[name="your-zgoda-regulamin"]');
    }

    checkConsentToTerms() {
        this.consentToTermsCheckbox.check();
    }

    get consentToProcessingCheckbox() {
        return cy.get('input[name="your-zgoda-wykorzystanie-przetwarzanie"]');
    }

    checkConsentToProcessing() {
        this.consentToProcessingCheckbox.check();
    }

}

export default new AlumniAssociationPage();