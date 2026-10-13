# Operations

An operation is one step in making a product, such as assembling or testing. Each operation belongs to a bill of materials and runs at a work center. When you confirm a manufacturing order, Aureus turns every operation into a work order.

> **In simple words:** An operation is a named step with a place and a time.

Open `Manufacturing → Configurations → Operations`.

## Settings

::: info Gate
**Operations** is hidden until **Work Orders** is on in `Manufacturing → Settings → Manage Operations`. Ordering steps needs **Work Order Dependencies** as well. See [Work order dependencies](work-order-dependencies.md).
:::

## Overview

<ImagePopup src="/images1/manufacturing/op_list.png" alt="Operations list with Assemble Components and Test & Pack, tab All, all columns visible" />

- **Tabs:** **All** and **Archived**.
- **Columns:** **Operation**, **Bill of Material**, **Work Center**, **Duration Computation**, **Default Duration**, **Worksheet**.
- **New Operation:** opens the create form.

## Create an operation

Scenario: add **Test & Pack** to **BOM-MC-LAPTOP**. It runs at **Quality & Packing** and takes 30 minutes.

1. Open `Manufacturing → Configurations → Operations` and click **New Operation**.

<ImagePopup src="/images1/manufacturing/op_create_general.png" alt="Create Operation form, General box filled: Operation Test & Pack, Bill of Material BOM-MC-LAPTOP, Work Center Quality & Packing" />

### General

- **_Operation:_** The step name. Required.
- **_Bill of Material:_** The BoM this step belongs to. Required.
- **_Work Center:_** Where the step runs. Required. You can create a new work center from this field.
- **_Apply on Variants:_** Limit the step to chosen variant values of the BoM product. Leave it empty to use the step for every variant. See [BoM variants](bom-variants.md).
- **_Company:_** Shown from the BoM. You cannot change it here.

### Work Sheet

A worksheet holds the instructions for the person doing the step.

<ImagePopup src="/images1/manufacturing/op_create_worksheet.png" alt="Work Sheet box with Text selected and a short description of the test steps" />

- **_Worksheet:_** Choose a type. Required. The default is **Text**.
  - **PDF:** A **PDF** upload field appears. Upload the instruction file.
  - **Google Slide:** A **Google Slide** link field appears. Paste the URL.
  - **Text:** A **Description** box appears. Type the instructions.

### Settings

<ImagePopup src="/images1/manufacturing/op_create_settings.png" alt="Settings box with Duration Computation Set duration manually and Default Duration 30:00" />

- **_Duration Computation:_** How Aureus finds the time for one cycle. Required.
  - **Set duration manually:** Aureus always uses **Default Duration**.
  - **Compute based on tracked time:** Aureus averages the real time of recent finished work orders. A **Based on last ... work orders** field appears. The default is 10. If no work orders are finished yet, it uses **Default Duration**.
- **_Default Duration:_** Minutes for one cycle, shown as hours and minutes. The default is 60:00.

2. Click **Create**.

::: tip
Start with **Set duration manually**. Switch to tracked time after a few work orders are finished.
:::

## Add steps from the BoM

You can also add steps on the **Operations** tab of the BoM. It lists each step with its work center and duration. The tab has **Edit Operation**, **Copy Existing Operations** and **Add a line**. See [Bill of materials](../basic-setup/bill-of-materials.md).

## What a step becomes

```text
Operation "Assemble Components"  ->  work order on Assembly Station
Operation "Test & Pack"          ->  work order on Quality & Packing
```

The work order copies the work center and the expected duration. It uses the capacity and efficiency of the work center. See [Work centers](work-centers.md).

## Actions and statuses

- **View** and **Edit** show or change the step.
- **Delete** archives it. Archived steps are listed on the **Archived** tab and are no longer used on new orders.
- Work orders already created keep their own data.

## See also

- [Work centers](work-centers.md)
- [Work order dependencies](work-order-dependencies.md)
- [Work orders](../workflows/work-orders.md)
- [Bill of materials](../basic-setup/bill-of-materials.md)
