/*
 * This is your starting library code.
 * Notice it is not exported as clients (the tests) only use
 * it through the GildedStockManager interface as returned by
 * createGildedStockManager().
 * You can make as many of these classes as you like as long
 * as the resulting composite is an object that fits the
 * return type of createGildedStockManager().
 */
import {GildedStockManager, StockItem} from "./GildedStockManager";

export class BasicGildedStockManager implements GildedStockManager {
  stockList: StockItem[] = [];
}
