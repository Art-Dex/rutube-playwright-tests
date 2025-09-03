import { test, expect } from '../../fixtures/fixtures';

test('Проверка доступности элементов хедера авторизованного пользователя', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов поп-апа уведомлений авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationsPopupList();
  await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов полного меню авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов меню пользователя в хедере авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openUserMenu();
  await mainPage.headerUserMenuAriaSnapshot();
});
