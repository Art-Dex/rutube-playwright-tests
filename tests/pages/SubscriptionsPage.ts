import { Locator } from 'playwright/test';
import { BasePage } from './BasePage';

export class SubscriptionsPage extends BasePage {
  private readonly contentPageLocator: Locator;
  constructor(page) {
    super(page);
    this.contentPageLocator = this.page.locator('.application-module__content');
  }

  async open() {
    await this.page.goto('https://rutube.ru/my/subscriptions');
  }

  async correctHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.contentPageLocator, 'subscriptionsAriaSnapshot.yml');
  }
}
