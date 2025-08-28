import { Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly cookiesAlert: Locator;
  readonly cookiesAlertButtonClose: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookiesAlert = page.getByLabel('Уведомление об использовании');
    this.cookiesAlertButtonClose = this.cookiesAlert.locator('button');
  }

  async closeCookiesAlert() {
    await this.cookiesAlertButtonClose.click();
  }
}
