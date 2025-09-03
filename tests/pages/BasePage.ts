import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly cookiesAlert: Locator;
  readonly cookiesAlertButtonClose: Locator;
  private readonly modalAdvertisingLocator: Locator;
  private readonly modalAdvertisingButtonClosedLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookiesAlert = page.getByLabel('Уведомление об использовании');
    this.cookiesAlertButtonClose = this.cookiesAlert.locator('button');
    this.modalAdvertisingLocator = this.page.locator('.wdp-popup-module__header');
    this.modalAdvertisingButtonClosedLocator = this.modalAdvertisingLocator.locator('button');
  }

  async closeCookiesAlert() {
    await this.cookiesAlertButtonClose.click();
  }

  async closedModalAdvertising() {
    if (await this.modalAdvertisingLocator.isVisible()) {
      await this.modalAdvertisingButtonClosedLocator.click();
    }
  }

  protected async checkAriaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({ name: ariaName });
  }

  protected async checkLoyiutByScreenshot(locator: Locator, screenshotName: string) {
    await expect(locator).toHaveScreenshot(screenshotName);
  }

  protected async hideElement(selector: string) {
    await this.page.evaluate((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        (element as HTMLElement).style.display = 'none';
      }
    }, selector);
  }
}
