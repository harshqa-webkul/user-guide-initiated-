# Three-step manufacturing

Three-step manufacturing is the most controlled setup. You pick the components, manufacture, then store the finished product in a second transfer. Each handover is a separate document. Use it for larger warehouses or when you need a full audit trail.

> **In simple words:** Pick the parts, build, then put the product away. Three steps, three records.

## Settings

The **Manufacturing** radio needs **Multi Steps Routes** and **Locations** on in `Inventory → Settings → Manage Warehouses`. See [One-step manufacturing](one-step-manufacturing.md) for the full gate.

## Choose three steps

1. Open `Inventory → Configurations → Warehouse Management → Warehouses`.
2. Click your warehouse, then the **Edit** tab.
3. In **Resupply Management**, select **Pick components, manufacture, then store products (3 steps)** in the **Manufacturing** radio.
4. Click **Save changes**.

<ImagePopup src="/images1/manufacturing/step3_warehouse_radio.png" alt="Warehouse Edit form, Resupply Management, Manufacturing radio with the 3 steps option selected, not yet saved" />

::: info
The warehouse now has the locations **Pre-Production** and **Post-Production**. It also has the operation types **Pick Components** (**PC**) and **Store Finished Product** (**SFP**).
:::

## How the stock moves

```text
Stock ─► Pre-Production ─► Production ─► Post-Production ─► Stock
 pick (WH/PC)           manufacture                    store (SFP)
```

**Post-Production** holds finished products until a storekeeper puts them away.

## Walk through a manufacturing order

This is the same order as in the other two pages: **MO/2**, **Business Laptop**, 2 units.

1. Create the order in `Manufacturing → Operations → Manufacturing Orders` and click **Confirm**.
2. Open the **Transfers** sub page. The pick transfer **WH/PC/…** is **Ready**.

<ImagePopup src="/images1/manufacturing/step3_transfers_confirmed.png" alt="MO Transfers sub page on a 3-step warehouse after Confirm, WH/PC transfer Ready" />

3. Open the pick transfer and click **Validate**.
4. Back on the order, click **Produce All**. The state becomes **Done**.

<ImagePopup src="/images1/manufacturing/step3_mo_done.png" alt="MO in Done state on a 3-step warehouse" />

5. Open **Transfers** again. A second transfer with the prefix **SFP** now exists.

<ImagePopup src="/images1/manufacturing/step3_transfers_sfp.png" alt="Transfers sub page listing both the WH/PC and the SFP transfer, SFP in Ready state" />

6. Open the **SFP** transfer and click **Validate**. The finished laptops enter **Stock**.

<ImagePopup src="/images1/manufacturing/step3_sfp_validated.png" alt="The SFP transfer after validation, state Done, from Post-Production to Stock, Business Laptop 2 units" />

## Actions and statuses

| Moment | What happens |
|---|---|
| **Confirm** | Creates the pick transfer **WH/PC/…**. |
| **Validate** (pick) | Components move **Stock** to **Pre-Production**. |
| **Produce All** | Components consumed. Finished product goes to **Post-Production**. State **Done**. |
| **Validate** (SFP) | Finished product moves to **Stock** and can be sold. |

::: warning
The order is **Done** before the SFP transfer is validated. The product is not in **Stock** until you validate it.
:::

## Compare the three options

| | One step | Two steps | Three steps |
|---|---|---|---|
| Extra documents | None | Pick | Pick and store |
| Staging locations | None | Pre-Production | Pre-Production, Post-Production |
| Finished goods in stock | At Done | At Done | After SFP validate |

## See also

- [One-step manufacturing](one-step-manufacturing.md)
- [Two-step manufacturing](two-step-manufacturing.md)
- [Three-step flow in Inventory](../../inventories/routes/three-step-flow.md)
- [Routes](../../inventories/routes/index.md)
- [Manufacturing order lifecycle](../workflows/index.md)
