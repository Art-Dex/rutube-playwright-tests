import test from '@playwright/test';
import { MainPage } from '../../pages/MainePage';

test('Проверка доступности элементов хедера', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closedModalNewReg();
  await mainPage.closeCookiesAlert();
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов меню', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closedModalNewReg();
  await mainPage.closeCookiesAlert();
  await mainPage.menuHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов табов категорий', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closedModalNewReg();
  await mainPage.closeCookiesAlert();
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});
