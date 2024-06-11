import sizesPage from '../../pageObjects/sizesPage';

describe('Sizes Selection Tests', () => {
    beforeEach(() => {
        cy.visit('https://react-shopping-cart-67954.firebaseapp.com/');
    });

    it('should select and verify the XS size checkbox', () => {
        sizesPage.selectSize('XS');
        sizesPage.isSizeSelected('XS');
    });

    it('should select multiple sizes and verify', () => {
        const sizes = ['S', 'M', 'L'];
        sizes.forEach(size => {
            sizesPage.selectSize(size);
            sizesPage.isSizeSelected(size);
        });
    });

    it('should unselect a size and verify', () => {
        sizesPage.selectSize('XL');
        sizesPage.isSizeSelected('XL');

        sizesPage.unselectSize('XL');
        sizesPage.isSizeUnselected('XL');
    });

    it('should verify no size checkbox is selected by default', () => {
        const sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
        sizes.forEach(size => {
            sizesPage.isSizeUnselected(size);
        });
    });

    it('should toggle a size checkbox and verify', () => {
        sizesPage.selectSize('XXL');
        sizesPage.isSizeSelected('XXL');

        sizesPage.unselectSize('XXL');
        sizesPage.isSizeUnselected('XXL');
    });

    it('should select all sizes and verify', () => {
        const sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
        sizes.forEach(size => {
            sizesPage.selectSize(size);
            sizesPage.isSizeSelected(size);
        });
    });
});
