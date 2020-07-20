import {BasicGildedStockManager} from "./BasicGildedStockManager";

// You cannot change this interface
export interface StockItem {
  name: string;
  price: number;
}

// You cannot change this interface
export interface GildedStockManager {
  stockList: StockItem[];
}

/*
 * The factory method. You cannot change the signature of this method,
 * but you may change its body to return a different implementation
 * of the interface.
 */
export function createGildedStockManager(): GildedStockManager {
  return new BasicGildedStockManager();
}
