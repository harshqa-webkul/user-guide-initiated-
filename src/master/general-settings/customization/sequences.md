# Sequences

A **sequence** is the rule that builds the number of a document, such as `INV/2026/00001`. It holds a prefix, a suffix, a counter and a padding. The app takes the next number from the sequence each time a document is created, so numbers never repeat.

> **In simple words:** A sequence is a numbering machine. You set how the number looks, and the app counts for you.

::: info
The app creates most sequences by itself. A sequence for a journal, a warehouse or an operation type appears when you create that record. You mostly edit them here.
:::

## Overview

Open `Settings → Sequences` to see all sequences.

<ImagePopup src="/images1/general-settings/sequences_list.png" alt="Sequences list with the New Sequence button and the Company filter" />

The list shows these columns:

- **_Name:_** The name of the sequence.
- **_Code:_** The technical identifier that documents use.
- **_Applies To:_** The record the sequence belongs to, for example a journal. It can end with a variant: **Refund**, **Payment** or **Refund + Payment**.
- **_Company:_** The company the sequence belongs to.
- **_Next Document Number:_** A preview of the next number the app will give.
- **_Next Number:_** The counter value.
- **_Reset Counter:_** When the counter starts again.

You can search by **Name** or **Code**, and sort most columns. Use the **Company** filter to see the sequences of one company. The list is sorted by **Code**.

## Create a sequence

Create a sequence yourself only for a custom code. Documents that need one create it for you.

1. Go to `Settings → Sequences`.
2. Click **New Sequence**.
3. Fill in the form.
4. Click **Create**.

<ImagePopup src="/images1/general-settings/sequences_create.png" alt="New Sequence form with the General and Numbering sections" />

### General

- **_Name:_** A name that helps you find the sequence. Optional.
- **_Code:_** The technical identifier used by documents, for example `sales.order`. This is required. It must be unique within the company.
- **_Company:_** Choose the company the sequence is for. Leave it empty to use it for all companies.

### Numbering

- **_Prefix:_** Text placed before the number. You can use `%(year)`, `%(y)`, `%(month)` and `%(day)`. For example, `INV/%(year)/`.
- **_Suffix:_** Text placed after the number. The same placeholders work here.
- **_Number Padding:_** How many digits the number has. The app adds zeros on the left. Use a value from 1 to 12. The default is 5.
- **_Next Number:_** The number the next document gets. The default is 1.
- **_Step:_** How much the counter grows each time. The default is 1.
- **_Reset Counter:_** When the counter goes back to 1. Choose **Never**, **Every Year** or **Every Month**.

<ImagePopup src="/images1/general-settings/sequences_numbering.png" alt="Numbering section with prefix, suffix, padding, next number, step and reset counter" />

### Example

With the prefix `INV/%(year)/`, padding 5 and next number 7, the next document number is `INV/2026/00007`.

## Edit a sequence

1. Click **Edit** on a row.
2. Change the **Name**, **Prefix**, **Suffix**, **Number Padding**, **Next Number**, **Step** or **Reset Counter**.
3. Click **Save changes**.

You cannot change the **Code** or the **Company** of an existing sequence. A sequence made by the app also shows **Applies To**.

::: warning
You can only raise **Next Number**. You cannot lower it. This stops two documents from getting the same number.
:::

::: tip
To restart numbering, delete the sequence. The app creates it again from the highest document number that exists.
:::

When you change **Reset Counter**, the app starts a new period for the counter.

## Delete a sequence

Click **Delete** on a row, or select several rows and use the bulk delete. The app shows a confirmation message when it is done.

## Actions and statuses

- **New Sequence:** Opens the create form.
- **Edit:** Opens the edit form of a sequence.
- **Delete:** Removes the sequence.

## See also

- [Companies](../companies/companies.md)
- [Custom fields](./custom-fields.md)
