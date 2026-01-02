import { test, expect } from '@playwright/test';

// Configurar para gravar vídeo
test.use({
  video: {
    mode: 'on',
    size: { width: 1280, height: 720 }
  },
  viewport: { width: 1280, height: 720 },
  launchOptions: {
    slowMo: 300 // Deixa mais lento para visualização
  }
});

test.setTimeout(120000); // 2 minutos de timeout

test('Showcase completo do E-commerce', async ({ page }) => {
  // 1. HOME PAGE
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await expect(page.locator('body')).toBeVisible();
  await page.waitForTimeout(1500);

  // Scroll na home para mostrar todo conteúdo
  await page.evaluate(() => window.scrollTo({ top: 500, behavior: 'smooth' }));
  await page.waitForTimeout(800);
  await page.evaluate(() => window.scrollTo({ top: 1000, behavior: 'smooth' }));
  await page.waitForTimeout(800);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await page.waitForTimeout(600);

  // 2. SHOP PAGE
  await page.goto('/shop');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);

  // Scroll para mostrar produtos
  await page.evaluate(() => window.scrollTo({ top: 500, behavior: 'smooth' }));
  await page.waitForTimeout(800);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await page.waitForTimeout(600);

  // 3. PRODUCT PAGE - Ir direto para um produto
  await page.goto('/product/1');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);

  // Scroll na página do produto
  await page.evaluate(() => window.scrollTo({ top: 300, behavior: 'smooth' }));
  await page.waitForTimeout(600);

  // Adicionar ao carrinho
  const addToCartBtn = page.locator('button:has-text("Add to Cart"), button:has-text("Adicionar")').first();
  if (await addToCartBtn.isVisible()) {
    await addToCartBtn.click();
    await page.waitForTimeout(1000);
  }

  // 4. CART PAGE
  await page.goto('/cart');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);

  // Scroll no carrinho
  await page.evaluate(() => window.scrollTo({ top: 300, behavior: 'smooth' }));
  await page.waitForTimeout(600);

  // 5. CHECKOUT PAGE
  await page.goto('/checkout');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);

  // Scroll no checkout
  await page.evaluate(() => window.scrollTo({ top: 400, behavior: 'smooth' }));
  await page.waitForTimeout(800);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await page.waitForTimeout(600);

  // 6. PRODUCT COMPARISON PAGE
  await page.goto('/comparison');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);

  // Scroll na comparação
  await page.evaluate(() => window.scrollTo({ top: 300, behavior: 'smooth' }));
  await page.waitForTimeout(600);

  // 7. BLOG PAGE
  await page.goto('/blog');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);

  // Scroll no blog
  await page.evaluate(() => window.scrollTo({ top: 500, behavior: 'smooth' }));
  await page.waitForTimeout(600);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await page.waitForTimeout(600);

  // 8. CONTACT PAGE
  await page.goto('/contact');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);

  // Scroll na página de contato
  await page.evaluate(() => window.scrollTo({ top: 400, behavior: 'smooth' }));
  await page.waitForTimeout(800);

  // Voltar para Home para finalizar
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);
});
