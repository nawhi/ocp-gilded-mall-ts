export interface StockItem {
  name: string;
  price: number;
}

export interface GildedStockManager {
  stockList: StockItem[];

  addItem(item: StockItem): void;
}

export function createGildedStockManager(): GildedStockManager {
  throw new Error("implement me!");
}
