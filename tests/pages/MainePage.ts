import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly modalNewRegLocator: Locator;
  private readonly modalNewRegButtonClosedLocator: Locator;
  private readonly headerAddButton: Locator;
  private readonly headerAddButtonListLocator: Locator;
  private readonly headerNotificationsButton: Locator;
  private readonly headerNotificationsPopupLocator: Locator;
  private readonly headerLoginButton: Locator;
  private readonly modalLoginOrRegister: Locator;
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly changeThemButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByRole('banner');
    this.categoriesTabLocator = this.page.locator('.wdp-tabs-module__tabs>div');
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    this.modalNewRegLocator = this.page.locator('.wdp-popup-module__header');
    this.modalNewRegButtonClosedLocator = this.modalNewRegLocator.locator('button');
    this.headerAddButton = this.page.getByRole('button', { name: 'Добавить' });
    this.headerAddButtonListLocator = this.page.locator('.wdp-header-right-module__uploader ul');
    this.headerNotificationsButton = this.page.getByRole('button', { name: 'Уведомления' });
    this.headerNotificationsPopupLocator = this.page.locator(
      '.wdp-notifications-popup-module__wrapper',
    );
    this.headerLoginButton = this.page.getByRole('button', { name: 'Вход и регистрация' });
    this.modalLoginOrRegister = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]');
    this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
    this.openMenuAriaLocator = this.page.locator('.menu-content-module__menuOpen');
    this.changeThemButtonLocator = this.page.getByRole('button', {
      name: 'Переключить на светлую тему',
    });
  }
  async open() {
    await this.page.goto('https://rutube.ru/');
  }

  async openFullMenu() {
    await this.menuButtonLocator.click();
  }

  async changeThemeToWhite() {
    await this.changeThemButtonLocator.click();
  }

  async headerHasCorrectAriaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({ name: 'hederAriaSnapshot.yml' });
  }

  async categoriesTabsHasCorrectAriaSnapshot() {
    await expect(this.categoriesTabLocator).toMatchAriaSnapshot({
      name: 'catigoriesAriaSnapshot.yml',
    });
  }

  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({ name: 'menuAriaSnapshot.yml' });
  }

  async closedModalNewReg() {
    if (await this.modalNewRegLocator.isVisible()) {
      await this.modalNewRegButtonClosedLocator.click();
    }
  }

  async openAddPopupList() {
    this.headerAddButton.click();
  }

  async openNotificationsPopupList() {
    this.headerNotificationsButton.click();
  }

  async openLoginModal() {
    this.headerLoginButton.click();
  }

  async addPopupListHasCorrectAriaSnapshot() {
    await expect(this.headerAddButtonListLocator).toMatchAriaSnapshot({
      name: 'addButtonList.yml',
    });
  }

  async notificationsPopupHasCorrectAriaSnapshot() {
    await expect(this.headerNotificationsPopupLocator).toMatchAriaSnapshot({
      name: 'notificationsPopup.yml',
    });
  }

  async modalLoginOrRegisterHasCorrectAriaSnapshot() {
    await expect(this.modalLoginOrRegister).toMatchAriaSnapshot({
      name: 'modalLoginOrRegister.yml',
    });
  }

  async fullMenuHasCorrectAriaSnapshot() {
    await expect(this.openMenuAriaLocator).toMatchAriaSnapshot({
      name: 'fullMenuSnapshot.yml',
    });
  }

  async checkThemeAttributeValee(attributeValue: 'white2022' | 'dark2021') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
  }
}
