describe('Amazon Product Search and Capture Details', () => {
    it('Search for a product, capture its details, and log them', () => {
      // Step 1: Visit Amazon's website
      cy.visit('https://www.amazon.com');
  
      cy.get('#twotabsearchtextbox').type('laptop');
      cy.get('#nav-search-submit-button').click();
  
      cy.get('.s-main-slot .s-title-instructions-style')
        .find('h2 a')
        .first()
        .then(($el) => {
          // Capture product name and link
          const productName = $el.text();
          const productLink = $el.attr('href');
  
          // Log the product name and link
          cy.log('Product Name:', productName);
          cy.log('Product Link:', `https://www.amazon.com${productLink}`);
  
          // Visit the product detail page using the captured link
          cy.visit(`https://www.amazon.com${productLink}`);
        });
  
      // Step 4: Capture the product price on the detail page
      cy.get('.a-price .a-offscreen').first().then(($priceEl) => {
        const productPrice = $priceEl.text();
  
       
        cy.log('Product Price:', productPrice);
      });
    });
  });
  