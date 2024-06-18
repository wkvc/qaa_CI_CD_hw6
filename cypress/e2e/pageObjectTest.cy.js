import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const LoginPage = new Login();
const Logout = new HomePage();

describe("Login and logout", () => { 
  it("Logowanie i wylogowanie", () => {
      // cy.visit("https://www.edu.goit.global/account/login"); 
      LoginPage.navigate();
      // cy.get("#user_email").type("user888@gmail.com");
      LoginPage.typeEmail();
      // cy.get("#user_password").type("1234567890");
      LoginPage.typePassword();
      // cy.get('.eckniwg2').click();
      LoginPage.clickLogin();
      // cy.get('#open-navigation-menu-mobile').click();
      Logout.openMenu();
      // cy.get(':nth-child(12) > .next-bve2vl').click();
      Logout.clickLogout();
  }); 
});