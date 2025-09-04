import { test } from '../../fixtures/fixtures';

test('Проверка доступности контента подписок для авторизованного пользователя', async ({
  subscriptionsPage,
}) => {
  await subscriptionsPage.correctHasCorrectAriaSnapshot();
});
