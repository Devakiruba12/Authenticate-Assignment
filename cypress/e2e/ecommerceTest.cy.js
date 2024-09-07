describe('Ecommerce Website searching', () => {
  
    it('Visits the Amazon Page', () => {
        cy.visit('https://www.amazon.in')

        cy.get('#twotabsearchtextbox').type('laptop');
        cy.get('#nav-search-submit-button').click();
  
        cy.wait(2000);

        cy.get('.s-main-slot .s-title-instructions-style')
        .find('h2 a')
        .first();
  
        cy.wait(2000);
  
        cy.get('#a-autoid-1-announce').click();
  
        cy.wait(2000); 
    //   cy.get('.a-size-medium-plus').should('contain.text', 'Added to Cart');
       cy.get('#nav-cart').click();

    // Step 8: Click on "Proceed to Checkout"
       cy.wait(2000); // Wait for the cart page to load
       cy.get('input[name="proceedToRetailCheckout"]').click();

    // Step 9: Wait for the Buy Now screen to load
       cy.wait(2000);


    });

});