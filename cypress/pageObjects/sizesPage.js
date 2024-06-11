class SizesPage {
    getSizeCheckbox(size) {
        return cy.get(`input[value="${size}"]`);
    }

    selectSize(size) {
        this.getSizeCheckbox(size).check({ force: true });
    }

    unselectSize(size) {
        this.getSizeCheckbox(size).uncheck({ force: true });
    }

    isSizeSelected(size) {
        this.getSizeCheckbox(size).should('be.checked');
    }

    isSizeUnselected(size) {
        this.getSizeCheckbox(size).should('not.be.checked');
    }
}

export default new SizesPage();
