import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButton: Locator;
  private readonly headerAddButtonListLocator: Locator;
  private readonly headerNotificationsButton: Locator;
  private readonly headerNotificationsPopupLocator: Locator;
  private readonly headerLoginButton: Locator;
  private readonly modalLoginOrRegister: Locator;
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly changeThemButtonLocator: Locator;
  private readonly userLogoLocator: Locator;
  private readonly headerUserMenuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByRole('banner');
    this.categoriesTabLocator = this.page.locator('.wdp-tabs-module__tabs>div');
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
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
    this.userLogoLocator = this.page.getByAltText('Иконка канала channel69127753');
    this.headerUserMenuLocator = this.page.locator(
      '.wdp-header-user-avatar-module__wrapper div>section',
    );
  }

  //actions
  async open() {
    await this.page
      .on('load', (error) => {
        console.log(error);
      })
      .goto('https://rutube.ru', { waitUntil: 'load', timeout: 60000 });
  }

  async openFullMenu() {
    await this.menuButtonLocator.click();
  }

  async openUserMenu() {
    await this.userLogoLocator.click();
  }

  async changeThemeToWhite() {
    await this.changeThemButtonLocator.click();
  }

  async openAddPopupList() {
    await this.headerAddButton.click();
  }

  async openNotificationsPopupList() {
    await this.headerNotificationsButton.click();
  }

  async openLoginModal() {
    await this.headerLoginButton.click();
  }

  // assertions
  async addPopupListHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerAddButtonListLocator, 'addButtonList.yml');
  }

  async notificationsPopupHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerNotificationsPopupLocator, 'notificationsPopup.yml');
  }

  async modalLoginOrRegisterHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.modalLoginOrRegister, 'modalLoginOrRegister.yml');
  }

  async fullMenuHasCorrectAriaSnapshot() {
    await this.page.evaluate(() => {
      const menuElement = document.querySelector('.menu-content-module__menuOpen');
      if (menuElement) {
        const links = menuElement.querySelectorAll('a[href]');
        links.forEach((link) => {
          if (link instanceof HTMLAnchorElement) {
            if (link.href.includes('client_id=')) {
              link.href = link.href.replace(/client_id=\d+/, 'client_id=static');
            }
          }
        });
      }
    });

    await this.checkAriaSnapshot(this.openMenuAriaLocator, 'fullMenuSnapshot.yml');
  }

  async checkThemeAttributeValee(attributeValue: 'white2022' | 'dark2021') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
  }

  async headerUserMenuAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerUserMenuLocator, 'hederUserMenuSnapshot.yml');
  }
  async headerHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerLocator, 'hederAriaSnapshot.yml');
  }

  async categoriesTabsHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.categoriesTabLocator, 'catigoriesAriaSnapshot.yml');
  }

  async menuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.menuLocator, 'menuAriaSnapshot.yml');
  }
}
