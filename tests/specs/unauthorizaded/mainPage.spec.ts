import { test, expect } from '../../fixtures/fixtures';

test('Проверка доступности элементов хедера', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов меню', async ({ mainPage }) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов табов категорий', async ({ mainPage }) => {
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов списка добовления контента', async ({ mainPage }) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов поп-апа уведомлений', async ({ mainPage }) => {
  await mainPage.openNotificationsPopupList();
  await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов модального окна авторизации и регистрации', async ({
  mainPage,
}) => {
  await mainPage.openLoginModal();
  await mainPage.modalLoginOrRegisterHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов полного меню', async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});

test('Переключение темы', async ({ mainPage }) => {
  await mainPage.checkThemeAttributeValee('dark2021');
  await mainPage.changeThemeToWhite();
  await mainPage.checkThemeAttributeValee('white2022');
});
