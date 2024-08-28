describe('Login Test', () => {
  const user = '123abcdegj@gmail.com';
  const passwd = '123';

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('Logs in with valid credentials', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').type(user);
    cy.get('#loginpassword').type(passwd);
    cy.get('button[onclick="logIn()"]').click();
  });
});
describe('Registration Test', () => {
  it('Registers a new user with random credentials', () => {
      const randomUsername = `user_${Math.random().toString(36).substring(2, 8)}`;
      const randomPassword = `pass_${Math.random().toString(36).substring(2, 8)}`;
      cy.visit('https://www.demoblaze.com/');
      cy.get('#signin2', { timeout: 10000 }).should('be.visible').click();  // Wait for the element to be visible
      cy.get('#sign-username').type(randomUsername);
      cy.get('#sign-password').type(randomPassword);
      cy.get('button[onclick="register()"]').click();
      cy.on('window:alert', (str) => {
          expect(str).to.equal('Sign up successful.');
      });
  });
  it('Adds a Samsung Galaxy S6 to the cart', () => {
      cy.visit('https://www.demoblaze.com/');
      cy.contains('Samsung galaxy s6').click();
      cy.contains('Add to cart').click();
      cy.on('window:alert', (str) => {
          expect(str).to.equal('Product added');
      });
      cy.get('#cartur').click();
      cy.contains('Samsung galaxy s6').should('be.visible');
  });
});
