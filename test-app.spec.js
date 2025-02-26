import { test, expect, chromium} from '@playwright/test';

test('test', async ({ page }) => {
  const browser = await chromium.launch({ headless: true });
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Ajouter un contact' }).click();
  await page.getByRole('textbox', { name: 'Prénom' }).click();
  await page.getByRole('textbox', { name: 'Prénom' }).fill('Étienne');
  await page.getByRole('textbox', { name: 'Nom', exact: true }).click();
  await page.getByRole('textbox', { name: 'Nom', exact: true }).fill('Gagnon');
  await page.getByRole('textbox', { name: 'Téléphone (xxx-xxx-xxxx)' }).click();
  await page.getByRole('textbox', { name: 'Téléphone (xxx-xxx-xxxx)' }).fill('123-123-1234');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('info@exemple.com');
  await page.getByRole('button', { name: 'Ajouter le contact' }).click();
  await page.getByRole('link', { name: 'Modifier' }).first().click();
  await page.getByRole('textbox', { name: 'Prénom' }).click();
  await page.getByRole('textbox', { name: 'Prénom' }).fill('Charles');
  await page.getByRole('button', { name: 'Ajouter le contact' }).click();
  await page.getByRole('link', { name: 'Supprimer' }).click();
  await browser.close();
});

