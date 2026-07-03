/* Visual + overflow audit for the static export. Dev-only. */
import { chromium } from "playwright-core";

const BASE = "http://localhost:4173/";
const widths = [
  { name: "w360", width: 360, height: 780 },
  { name: "w768", width: 768, height: 1024 },
  { name: "w1024", width: 1024, height: 768 },
  { name: "w1440", width: 1440, height: 900 },
];

const browser = await chromium.launch({ channel: "msedge", headless: true });

for (const vp of widths) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
  });
  await page.goto(BASE, { waitUntil: "networkidle" });
  const overflow = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    docScrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
  }));
  console.log(
    `${vp.name}: innerWidth=${overflow.innerWidth} docScrollWidth=${overflow.docScrollWidth} bodyScrollWidth=${overflow.bodyScrollWidth} ${
      overflow.docScrollWidth > overflow.innerWidth ? "!! OVERFLOW" : "ok"
    }`,
  );
  // settle reveals by scrolling through the page (instant, so CSS
  // smooth-scrolling can't lag behind the loop)
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.7;
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 250));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: `.shots/audit-${vp.name}.png`,
    fullPage: true,
  });
  await page.close();
}

// Modal interaction test at desktop
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(BASE, { waitUntil: "networkidle" });
await page.getByRole("button", { name: "Book a Consultation" }).first().click();
await page.waitForTimeout(400);
await page.screenshot({ path: ".shots/audit-modal.png" });

// validation errors
await page.getByRole("button", { name: "Request consultation" }).click();
await page.waitForTimeout(300);
await page.screenshot({ path: ".shots/audit-modal-errors.png" });

// fill and submit
await page.getByLabel("Full name").fill("Test Person");
await page.getByLabel("Phone", { exact: true }).fill("+91 98765 43210");
await page.getByRole("button", { name: "Request consultation" }).click();
await page.waitForTimeout(400);
await page.screenshot({ path: ".shots/audit-modal-success.png" });

// escape closes + focus restore
await page.keyboard.press("Escape");
await page.waitForTimeout(300);
const dialogGone = (await page.locator('[role="dialog"]').count()) === 0;
console.log(`modal: escape closes = ${dialogGone}`);

// mobile menu test
const mp = await browser.newPage({ viewport: { width: 360, height: 780 } });
await mp.goto(BASE, { waitUntil: "networkidle" });
await mp.getByRole("button", { name: "Open menu" }).click();
await mp.waitForTimeout(300);
await mp.screenshot({ path: ".shots/audit-mobile-menu.png" });
console.log("done");
await browser.close();
