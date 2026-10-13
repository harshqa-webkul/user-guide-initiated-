# Bill sequence

Every vendor bill gets a number when you save it, for example `BILL/2026/4`. Aureus builds this number from a sequence that belongs to the **Vendor Bills** journal. Knowing how it works helps you read your numbers and fix them when needed.

> **In simple words:** The bill number is made by a counter. The counter belongs to the Vendor Bills journal and starts again each year.

## How a bill number is made

A number has three parts: a prefix, the year and a counter.

- **Prefix:** The journal code. For vendor bills the code is `BILL`.
- **Year:** The year of the accounting date, for example `2026`.
- **Counter:** A number that grows by one with each bill. New sequences pad it to five digits.

A new bill is therefore numbered like `BILL/2026/00005`. Older seed data may show shorter counters, such as `BILL/2026/4`. Both forms are valid.

The default prefix is `{journal code}/{year}/`. For the Vendor Bills journal, that is `BILL/%(year)/`.

## Reset every year

The counter is set to restart **Every Year**. The first bill of 2027 becomes `BILL/2027/00001`. You can change this rule in the sequence.

## Refund numbers

A refund is a bill you reverse with the **Refund** button. Its number depends on the journal.

- If the journal has **Dedicated Credit Note Sequence** on, refunds use their own counter. Their prefix gets an `R`, so you see `RBILL/2026/00006`.
- If the toggle is off, refunds share the counter of the bills.

Set this toggle in `Accounting → Configurations → Journals`. Open the **Vendor Bills** journal and find it under **Accounting Information**. See [Journals](../get-started/journals.md).

## See and change the sequence

1. Go to `Settings → Sequences`.
2. Find the rows **Vendor Bills** and **Vendor Bills (Refund)**.
3. Check **Next Document Number** to see the number the next bill gets.
4. Click **Edit** to change it.

The list shows **Name**, **Code**, **Applies To**, **Company**, **Next Document Number**, **Next Number** and **Reset Counter**. In the example data, **Vendor Bills** shows `BILL/2026/00005` and **Vendor Bills (Refund)** shows `RBILL/2026/00006`.

<ImagePopup src="/images1/finance/bill_sequences_list.png" alt="Sequences list with the Vendor Bills and Vendor Bills (Refund) rows and their next document numbers" />

On the edit form you can change the **Name**, **Prefix**, **Suffix**, **Number Padding**, **Next Number**, **Step** and **Reset Counter**. See [Sequences](../../general-settings/customization/sequences.md) for every field.

## Rules for Next Number

- You can only raise **Next Number**. You cannot lower it.
- Aureus checks this so two bills never share a number.
- To skip numbers, enter a higher value. The next bill uses it.
- To start again from 1, delete the sequence. Aureus rebuilds it from the highest number that exists.

::: warning
Do not lower a counter to reuse numbers. Posted bills keep their numbers, and gaps in a series are normal.
:::

::: tip
Customer invoices work the same way, with the code `INV`. See [Invoice sequence](../customer-invoices/invoice-sequence.md).
:::

## See also

- [Create a vendor bill](create-bill.md)
- [Invoice sequence](../customer-invoices/invoice-sequence.md)
- [Sequences](../../general-settings/customization/sequences.md)
- [Journals](../get-started/journals.md)
