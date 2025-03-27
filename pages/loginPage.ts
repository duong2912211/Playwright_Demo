import { Page } from '@playwright/test';
import { BaseElements } from '../elements/baseElement';
import * as Constants from '../constants';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  // Specific selectors
  private loginButton = `//button[@type='submit' and normalize-space()='Login']`;

  // Methods
  async enterUsername(username: string) {
    await this.page.fill(BaseElements.inputWithAttribute('name','username'), username);
  }

  async enterPassword(password: string) { 
    await this.page.fill(BaseElements.inputWithAttribute('name','password'), password);
  }

  async clickLoginButton() {
    await this.page.click(this.loginButton);
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async loginIntoEnv() {
    await this.enterUsername(Constants.VALID_USERNAME);
    await this.enterPassword(Constants.VALID_PASSWORD);
    await this.clickLoginButton();
  }
}