import {expect} from "chai";
import {createGildedStockManager, GildedStockManager, StockItem} from "../src/GildedStockManager";

describe('Gilded Stock Manager', () => {
    it('all tenants can record item name and price', () => {
        const stockManager: GildedStockManager = createGildedStockManager();
        const stockList: StockItem[] = stockManager.stockList;
        stockList.forEach((item: StockItem) => {
            expect(item.name).to.exist;
            expect(item.price).to.exist;
        })

    });
});
