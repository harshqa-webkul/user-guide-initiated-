# Produce and consume

Producing is the last step of an MO. You tell Aureus how much you made and how much of each component you used. Aureus then removes the components from stock, adds the finished goods and closes the order.

> **In simple words:** Produce means "I made it". Consume means "these parts were used up".

Use the buttons on the MO at `Manufacturing → Operations → Manufacturing Orders`.

## Settings

How strict Aureus is about extra or missing components is set on the bill of materials. Open the BoM and look at **Flexible Consumption** in the **Miscellaneous** box. See [Bill of materials](../basic-setup/bill-of-materials.md).

| Value | What you see when you produce |
| --- | --- |
| **Allowed** | No warning. Consumed amounts are accepted as typed. |
| **Allowed with warning** | The **Consumption Warning** window opens if amounts differ. This is the default for a new BoM. |
| **Blocked** | The same window opens. Use it for recipes where amounts should not change. |

## Produce All

Scenario: finish **MO/2**, 2 Business Laptops, with nothing changed.

1. Open **MO/2**. Its state is **Confirmed** or **In Progress**.
2. Check **Quantity Producing**. It equals the order quantity, 2.

<ImagePopup src="/images1/manufacturing/prod_quantity_producing.png" alt="MO view or edit with Quantity Producing showing 2.0000 / 2.0000 Units and the Produce All button visible" />

3. Click **Produce All**.

<ImagePopup src="/images1/manufacturing/prod_produce_all.png" alt="MO header with the Produce All button highlighted" />

4. Aureus shows **Manufacturing order completed**. The state becomes **Done**.

<ImagePopup src="/images1/manufacturing/prod_done.png" alt="MO in Done state with state bar on Done and no action buttons" />

### What happens

- Open work orders are finished.
- Components are consumed.
- The finished goods are created.
- The MO is locked. No action buttons remain.

```text
Stock → Pre-Production → Production        (components used up)
Production → Stock                         (finished laptops)
```

With a three step warehouse, a store transfer (prefix **SFP**) also moves the finished goods to **Stock**. See [Three step manufacturing](../basic-setup/three-step-manufacturing.md).

## Produce a different quantity

Change **Quantity Producing** to a number below or above the order quantity. The button label changes from **Produce All** to **Produce**.

1. Open the MO and click **Edit**.
2. Set **Quantity Producing** to 1 and save.

<ImagePopup src="/images1/manufacturing/prod_quantity_partial.png" alt="MO edit form with Quantity Producing set to 1 of 2 and the Produce button showing" />

3. Click **Produce**. Aureus asks you to confirm with **Submit** or **Cancel**.

The window is titled **Produced is different than expected**. It says: "The quantity produced is different than expected. Do you want to confirm the manufacturing order with the current quantity?"

<ImagePopup src="/images1/manufacturing/prod_produced_warning.png" alt="Produced is different than expected modal on an MO with Quantity Producing 1 of 2" />

Click **Submit**. The order completes with the quantity you entered.

## Actions and statuses

| Action | Result |
| --- | --- |
| **Produce All** | Finishes the full quantity. State **Done**. |
| **Produce** | Finishes the quantity in **Quantity Producing**. The order completes. State **Done**. |

A **Done** order is locked. To start again, create a new MO.

## See also

- [Manufacturing orders](manufacturing-orders.md)
- [Work orders](work-orders.md)
- [Lots and serial numbers](lots-and-serial-numbers.md)
- [Bill of materials](../basic-setup/bill-of-materials.md)
