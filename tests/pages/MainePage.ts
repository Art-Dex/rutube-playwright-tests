import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly modalNewRegLocator: Locator;
  private readonly modalNewRegButtonClosedLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByRole('banner');
    this.categoriesTabLocator = this.page.locator('.wdp-tabs-module__tabs>div');
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    this.modalNewRegLocator = this.page.locator('.wdp-popup-module__header');
    this.modalNewRegButtonClosedLocator = this.modalNewRegLocator.locator('button');
  }
  async open() {
    await this.page.goto('https://rutube.ru/');
  }

  async headerHasCorrectAriaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot();
  }

  async categoriesTabsHasCorrectAriaSnapshot() {
    await expect(this.categoriesTabLocator).toMatchAriaSnapshot();
  }

  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot();
  }

  async closedModalNewReg() {
    if (await this.modalNewRegLocator.isVisible()) {
      await this.modalNewRegButtonClosedLocator.click();
    }
  }
}
