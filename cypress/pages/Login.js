export class Login {
  navigate() {
    cy.visit("https://www.edu.goit.global/account/login");
    }
  typeEmail() {
    cy.get("#user_email").type("user888@gmail.com");
    }  
  typePassword() {
    cy.get("#user_password").type("1234567890");
    }
  clickLogin() {
    cy.get('.eckniwg2').click();  
    }     
}