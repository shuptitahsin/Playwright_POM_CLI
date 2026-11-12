// pages/InventoryPage.js
class InventoryPage {
  constructor(page) {

    this.page = page;
    this.pageTitle = page.locator('[data-test="title"]');
    this.productList = page.locator('[data-test="inventory-list"]');
  }
  async isLoaded() {

    try {

      await this.pageTitle.waitFor({ state: 'visible', timeout: 5000 });

      return await this.productList.isVisible();

    } catch (error) {

      // The title did not appear in time, so the page is not loaded.
      return false;
    }
  }
}
module.exports = { InventoryPage };