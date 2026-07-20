import { test, expect } from '@playwright/test';

test('login flow', async ({ page }) => {
  await page.goto('https://preprod.such.ai/login', { waitUntil: 'domcontentloaded' });

  const emailInput = page.locator('input[type="email"], input[name*="email" i], input[placeholder*="email" i]').first();
  const passwordInput = page.locator('input[type="password"], input[name*="password" i], input[placeholder*="password" i]').first();
  const checkbox = page.locator('input[type="checkbox"]').first();
  const continueButton = page.getByRole('button', { name: /continue/i }).first();

  await emailInput.waitFor({ state: 'visible', timeout: 10000 });
  await emailInput.fill('ushakiranb.ext@shapoorji.com');
  await passwordInput.fill('Admin@12345');
  await checkbox.check();
  await continueButton.click();

  const onboardingLink = page.getByText(/anchor onboarding/i).first();
  const managementLink = page.getByText(/anchor management/i).first();

  await expect(onboardingLink).toBeVisible({ timeout: 15000 });
  await onboardingLink.click();
  await expect(managementLink).toBeVisible({ timeout: 15000 });
  await managementLink.click();

  await expect(page.locator('#anchor-action-holder-1')).toBeVisible({ timeout: 15000 });
});