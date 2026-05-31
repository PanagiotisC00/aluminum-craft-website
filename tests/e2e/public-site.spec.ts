import { expect, test } from '@playwright/test';

test('homepage renders core public sections from localhost', async ({ page, baseURL }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Professional Aluminum Fabrication Cyprus/i);
  await expect(page.getByRole('navigation')).toBeVisible();
  await expect(page.getByRole('heading', { name: /Professional Aluminum Fabrication in Cyprus/i })).toBeVisible();
  await expect(page.locator('#services').getByRole('heading', { name: /Our Services/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Get In Touch/i }).first()).toBeVisible();

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${baseURL}/`);
});

test('sitemap and robots use the local origin', async ({ request, baseURL }) => {
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain(`${baseURL}/`);

  const robots = await request.get('/robots.txt');
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain(`Sitemap: ${baseURL}/sitemap.xml`);
});

test('contact form validates locally without calling production form endpoint', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /^Send Message$/ }).click();

  await expect(page.getByText('Name is required')).toBeVisible();
  await expect(page.getByText('Email is required')).toBeVisible();
  await expect(page.getByText('Message is required')).toBeVisible();

  await page.getByLabel('Full Name *').fill('Alex');
  await page.getByLabel('Email Address *').fill('alex@example.com');
  await page.getByLabel('Project Details *').fill('Please quote a railing project.');
  await page.getByRole('button', { name: /^Send Message$/ }).click();

  await expect(page.getByText('Failed to send message. Please try again.')).toBeVisible();
});

test('gallery images are keyboard accessible and open an accessible dialog', async ({ page }) => {
  await page.goto('/');

  await page.locator('#gallery').scrollIntoViewIfNeeded();
  const firstGalleryImage = page.getByRole('button', { name: /Modern aluminum windows installation/i });
  await firstGalleryImage.focus();
  await expect(firstGalleryImage).toBeFocused();

  await page.keyboard.press('Enter');
  const lightbox = page.getByRole('dialog', { name: /Modern aluminum windows installation/i });
  await expect(lightbox).toBeVisible();
  await expect(page.getByRole('button', { name: /Close/i })).toBeFocused();

  await page.keyboard.press('Escape');
  await expect(lightbox).toBeHidden();
});

test('legal modal exposes dialog semantics and closes with Escape', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: /Privacy Policy/i }).click();
  const dialog = page.getByRole('dialog', { name: /Privacy Policy/i });
  await expect(dialog).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
});
