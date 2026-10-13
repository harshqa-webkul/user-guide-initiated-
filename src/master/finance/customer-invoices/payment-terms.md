# Payment terms

A payment term is a rule that says when a customer must pay. For example "pay within 30 days", or "half now and half in 30 days". You pick a term on an invoice and Aureus works out the due date for you, so nobody has to count days by hand.

> **In simple words:** A payment term turns the invoice date into one or more due dates.

Open the list with `Invoices → Configurations → Payment Terms` or `Accounting → Configurations → Invoicing → Payment Terms`.

## Overview

The list shows ready-made terms such as **Immediate Payment**, **15 Days**, **21 Days**, **30 Days**, **45 Days**, **End of Following Month**, **10 Days after End of Next Month**, **2/7 Net 30**, **30% Now, Balance 60 Days** and **90 Days, on the 10th**. Tabs are **All** and **Archived**. Use **Group by** to fold by **Company Name** or filter by **Payment Term**.

<ImagePopup src="/images1/finance/payment_term_list.png" alt="Payment Terms list with the All and Archived tabs and the ready-made terms" />

## Create a payment term

1. Go to `Invoices → Configurations → Payment Terms` or `Accounting → Configurations → Invoicing → Payment Terms`.
2. Click **New Payment Term**.
3. Fill in the top section, then add the due terms.
4. Click **Create**.

<ImagePopup src="/images1/finance/payment_term_create.png" alt="New Payment Term form: name '30 Days', one due term of 100 Percent after 30 days, with the preview on the right" />

### General

- **_Payment Term:_** The name people pick on the invoice. Required. Use a clear name such as "30 Days".
- **_Company:_** Limit the term to one company. Leave it on **All Companies** to share it.
- **_Note:_** Text about the term. Use it to explain the rule to your team.

### Due Terms

A term has one or more due terms. Each due term says how much is due and when. Click **Add Due Term** for each part.

- **_Value:_** How the amount is counted. Choose **Percent** for a share of the total, or **Fixed** for a fixed amount.
- **_Due:_** The number. With **Percent**, enter a value from 0 to 100. With **Fixed**, enter the amount.
- **_Delay Type:_** How the date is counted. Choose one of:
  - **Days After:** Counts the days from the invoice date.
  - **Days After End of Month:** Counts the days from the end of the invoice month.
  - **Days After End of Next Month:** Counts the days from the end of the month after the invoice month.
  - **Days End of Month No The:** Adds the days, then moves to a set day of the next month. Use **Days on the next month** to give that day. Enter 0 to land on the end of the month.
- **_Days:_** How many days to add.
- **_Days on the next month:_** The day of the next month, such as 10. It is hidden at first. Use the column toggle to show it.

The preview on the right shows an example of 1,000.00 and the due dates it would get. Use it to check your rule before you save.

::: tip
Make the percentages of all due terms add up to 100. If they do not, part of the invoice has no due date.
:::

## Examples

**30 days:** One due term. **Value** Percent, **Due** 100, **Delay Type** Days After, **Days** 30. An invoice dated July 1 is due on July 31.

**50 % now, 50 % in 30 days:** Two due terms.

1. **Percent**, 50, **Days After**, **Days** 0. Half is due on the invoice date.
2. **Percent**, 50, **Days After**, **Days** 30. The other half is due 30 days later.

**End of the following month:** One due term. **Percent**, 100, **Days After End of Next Month**, **Days** 0.

## Use a payment term

- On an invoice, pick it in **Payment Term**. The **Due Date** field then hides and the term gives the date. See [Create an invoice](create-invoice.md).
- On a customer, set **Payment Terms** in the **Sales and Purchases** tab. Every new invoice for that customer starts with it. See [Manage customers](../../sales/sales/quotations-orders/manage-customers.md).

## Edit and delete

Use the row menu to **View**, **Edit** or **Delete**. A deleted term moves to **Archived** and can be restored. A term that is used on journal entries cannot be deleted for good.

## See also

- [Create an invoice](create-invoice.md)
- [Manage customers](../../sales/sales/quotations-orders/manage-customers.md)
- [Create a vendor bill](../vendor-bills/create-bill.md)
