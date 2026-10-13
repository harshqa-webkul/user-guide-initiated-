# First steps with Inventory

This tutorial walks one product through the whole cycle. You check the warehouse, make a storable product, receive stock from a purchase order, see it in the stock report and then deliver it from a sales order. Each step links to a deeper page, so treat this as a map.

> **In simple words:** Buy it, receive it, see it on the shelf, sell it, ship it.

```text
Warehouse  →  Product  →  Receive (PO)  →  Stock report  →  Deliver (SO)  →  Stock drops
```

## Step 1: Check the warehouse and locations

1. Go to `Inventory → Configurations → Warehouses`.
2. Open your warehouse. The sample company has **My Company** with short name **WH**.
3. Check the **Settings** block. Incoming and Outgoing Shipments show how many steps your flow has.

<ImagePopup src="/images1/inventory/ft_warehouse_view.png" alt="Warehouse My Company open with Incoming and Outgoing Shipments set to Three steps" />

4. Go to `Inventory → Configurations → Locations` and find **WH/Stock**.

<ImagePopup src="/images1/inventory/ft_locations_list.png" alt="Locations list on the All tab showing WH/Stock, WH/Input, WH/Output and Partners/Vendors" />

**Behind the scenes:** The short name **WH** starts every location name. **WH/Stock** is where your sellable goods rest. See [Warehouses](../warehouses/warehouses.md) and [Locations](../warehouses/locations.md).

## Step 2: Make a storable product

This tutorial uses one product, **Desk Lamp**, from start to finish.

1. Go to `Inventory → Products → Products` and click **New Product**.
2. Enter **Name** **Desk Lamp**. Set **Type** to **Goods**.
3. In the **Inventory** section, check that **Track Inventory** is on.
4. Keep the **Category** **All**. Enter **Price** 800 and **Cost** 500.

<ImagePopup src="/images1/inventory/ft_product_track_inventory.png" alt="Create Product form for Desk Lamp with Type Goods, Price 800, Cost 500 and Track Inventory switched on in the Inventory section" />

5. Click **Create**.

**Behind the scenes:** A product without **Track Inventory** never gets a stock quantity. See [Configure a product](../products/configure-product.md).

## Step 3: Receive stock from a purchase order

You buy 20 Desk Lamps from a vendor.

1. Create a purchase order for **Consolidated Components** with 20 **Desk Lamp** at a unit price of 500, then click **Confirm Order**. Here the order is **PO/00011**. See [Purchase orders](../../purchase/orders/purchase-orders.md).
2. Open the order and click **Receipts** in the switcher at the top (**View**, **Edit**, **Vendor Bills**, **Receipts**). The sub page **Manage PO/00011 Receipts** lists the receipt **WH/IN/00020** with the source document PO/00011.

<ImagePopup src="/images1/inventory/ft_po_receipts_tab.png" alt="Manage PO/00011 Receipts sub page listing receipt WH/IN/00020 in Ready status" />

3. Open **WH/IN/00020**. The status is **Ready**. The moves show Desk Lamp with a demand of 20 Units.
4. Click **Validate**.

<ImagePopup src="/images1/inventory/ft_receipt_validate.png" alt="Receipt WH/IN/00020 in Ready status showing Desk Lamp, 20 Units, with the Validate button" />

5. This warehouse uses three steps, so the goods are not in **WH/Stock** yet. Validate the next two documents of the same order in turn. Open `Inventory → Operations → Internal Transfers`, then validate the quality control document **WH/QC/00017** and the storage document **WH/STOR/00040**. With a one-step warehouse, the goods land in **WH/Stock** directly after the receipt.

**Behind the scenes:** The 20 Units move from **Partners/Vendors** to **WH/Input**. The quality control document moves them to **WH/Quality Control**. The storage document moves them to **WH/Stock**. Each document changes to **Done** when you validate it. See [Receipts](../operations/receipts.md).

## Step 4: See the stock

1. Go to `Inventory → Reporting → Locations`.
2. Search **Desk Lamp**.
3. Read the **On Hand Quantity** column. Each row is one product in one location. The page title is **Product Quantities**. **Desk Lamp** shows 20 in **WH/Stock**.

<ImagePopup src="/images1/inventory/ft_stock_report.png" alt="Product Quantities report searched for Desk Lamp showing 20 on hand in WH/Stock" />

::: tip
The search also lists other products with Desk Lamp in the name. Read the row named exactly **Desk Lamp**.
:::

You can also open the product list. The **On Hand** and **Forecasted** columns show the same quantity. See [Stock report](../reporting/stock-report.md).

## Step 5: Deliver from a sales order

You sell 5 Desk Lamps to a customer.

1. Create a sales order for **Azure Interiors** with 5 **Desk Lamp** at a unit price of 800, then confirm it. Here the order is **SO/00013**. See [Send and confirm a quotation](../../../sales/sales/quotations-orders/send-and-confirm-quotation.md).
2. Open the order and click **Deliveries** in the switcher at the top. The sub page **Manage SO/00013 Deliveries** lists **WH/PICK/00012**, **WH/PACK/00043** and **WH/OUT/00047**. At first only the pick document exists. The next document appears when you validate the one before it.

<ImagePopup src="/images1/inventory/ft_so_deliveries_tab.png" alt="Manage SO/00013 Deliveries sub page listing WH/OUT/00047, WH/PACK/00043 and WH/PICK/00012, all Done" />

3. Validate each document in turn: **WH/PICK/00012**, then **WH/PACK/00043**, then **WH/OUT/00047**. The last one is the delivery to the customer. Its status becomes **Done** and the buttons **Return** and **Print** appear.

<ImagePopup src="/images1/inventory/ft_delivery_done.png" alt="Delivery WH/OUT/00047 in Done status showing Desk Lamp, 5 Units, with the Return and Print buttons" />

**Behind the scenes:** Pick moves goods from **WH/Stock** to **WH/Packing Zone**. Pack moves them to **WH/Output**. Delivery sends them to **Partners/Customers**. See [Deliveries](../operations/deliveries.md).

## Step 6: Check the drop

1. Go back to `Inventory → Reporting → Locations` and search **Desk Lamp**.
2. The **On Hand Quantity** in **WH/Stock** is now 15. You received 20 and delivered 5, so 20 minus 5 equals 15.

<ImagePopup src="/images1/inventory/ft_stock_after_delivery.png" alt="Product Quantities report searched for Desk Lamp showing 15 on hand in WH/Stock after the delivery" />

3. Open the product list. The **On Hand** column for **Desk Lamp** shows 15 Units.

<ImagePopup src="/images1/inventory/ft_product_on_hand.png" alt="Products list searched for Desk Lamp showing price 800, cost 500 and On Hand 15 Units" />

4. Open `Inventory → Reporting → Moves History` (the page title is **Move Lines**). Search **Desk Lamp** to see every move it made.

<ImagePopup src="/images1/inventory/ft_moves_history.png" alt="Move Lines list searched for Desk Lamp showing three receipt moves of 20 Units in and three delivery moves of 5 Units out" />

The three moves of 20 Units came in from the purchase order. The three moves of 5 Units went out with the sales order.

## Where to go next

| You want to | Read |
| --- | --- |
| Trace batches or single items | [Lots and serial numbers](../tracking/lots-and-serial-numbers.md) |
| Fix a wrong count | [Inventory adjustments](../adjustments/inventory-adjustments.md) |
| Change the number of steps | [Routes](../routes/index.md) |
| Work with a scanner | [Barcode](../barcode/index.md) |

## See also

- [Inventory overview](inventory-overview.md)
- [Inventory settings](inventory-settings.md)
- [Operations](../operations/index.md)
