# Work orders

A work order is one step of a manufacturing order, run at one work center. If an MO says "make 5 laptops", the work orders say "assemble the parts at Assembly Station" and "test and pack at Quality & Packing". Operators use them to start, pause and finish each step. Aureus records the time spent.

> **In simple words:** A work order is one to-do item of an MO, with a timer.

Open `Manufacturing → Operations → Work Orders`.

## Settings

The **Work Orders** menu and the **Work Orders** tab on the MO need **Work Orders** on in `Manufacturing → Settings → Manage Operations`. The **Blocked By** order rules need **Work Order Dependencies** too. See [Manufacturing settings](../get-started/manufacturing-settings.md).

You do not create work orders by hand. Aureus builds one for each operation of the bill of materials when the MO is created. See [Operations](../advanced-configuration/operations.md).

## Overview

<ImagePopup src="/images1/manufacturing/wo_list.png" alt="Work Orders list with MO/2 rows for Assemble Components and Test & Pack, tabs and summary row visible" />

- **Tabs:** **Default**, **To Do**, **Draft**, **Done**, **Cancelled**.
- **Columns:** **Operation**, **Work Center**, **Manufacturing Order**, **Product**, **Quantity Remaining**, **Expected Duration**, **Real Duration**, **Status**. A summary row adds up the durations.
- **Row actions:** **View**, **Edit**. Icon buttons start, pause and finish the work order.

There is no create button.

## States

| State | Meaning |
| --- | --- |
| **Waiting for another work order** | An earlier work order in **Blocked By** is not finished. |
| **Waiting for components** | Components are not reserved yet. |
| **Ready** | You can start. |
| **In Progress** | The timer runs. |
| **Finished** | The step is complete. |
| **Cancelled** | The MO was cancelled. |

```text
Waiting for another work order → Waiting for components → Ready → In Progress → Finished
```

## Run a work order

Scenario: run **Assemble Components** of **MO/2**.

1. Open `Manufacturing → Operations → Work Orders`.
2. Find the row **Assemble Components** that is **Ready**.
3. Click the **Start** icon. **Status** becomes **In Progress** and the MO becomes **In Progress**.

<ImagePopup src="/images1/manufacturing/wo_start.png" alt="Work Orders list row Ready with the start icon highlighted" />

4. Click the **Pause** icon for a break. The time log closes. Click start to resume.
5. Click the **Done** icon when the step is complete. **Status** becomes **Finished**.

<ImagePopup src="/images1/manufacturing/wo_done.png" alt="Work order row In Progress with pause and done icons visible" />

::: warning
If the work center is blocked, Aureus refuses to start. It says "Please unblock the work center to start the work order."
:::

The same icons are on the **Work Orders** tab of the MO.

## View a work order

Click **View** on a row.

<ImagePopup src="/images1/manufacturing/wo_view.png" alt="Work order view page for MO/2 - Assemble Components: state bar and General section" />

The **General** section shows:

- **_Work Order:_** The operation name.
- **_Work Center:_** Where it runs.
- **_Product:_** The product you make.
- **_Quantity:_** The quantity to process.
- **_Manufacturing Order:_** The parent MO.
- **_Lot/Serial Number:_** The lot or serial, if the product is tracked.
- **_Start Date_** and **_End Date_:** The planned window. See [Plan and schedule](plan-and-schedule.md).
- **_Expected Duration_** and **_Real Duration_:** Planned and tracked time.

### Time Tracking

<ImagePopup src="/images1/manufacturing/wo_time_tracking.png" alt="Time Tracking tab of a work order that was started and paused, with log rows and Real Duration" />

Each start and pause makes a log row: **User**, **Duration**, **Start Date**, **End Date**, **Productivity**. **Real Duration** adds them up.

### Components

Lists the components used by this step.

### Work Instruction

<ImagePopup src="/images1/manufacturing/wo_work_instruction.png" alt="Work Instruction tab showing the worksheet of the operation" />

Shows the worksheet of the operation: a PDF, a Google Slide or text. Set it on the operation. See [Operations](../advanced-configuration/operations.md).

### Blocked By

Lists the work orders that must finish first. While any of them is open, this one waits.

## Expected vs real duration

**Expected Duration** is the plan. **Real Duration** is the time your team logged. Compare them to improve the default duration on the operation. See [Manufacturing order costs](../basic-setup/manufacturing-order-costs.md).

## Behind the scenes

Start sets the work order and the MO to **In Progress**. Pause ends the open time log. Done sets **Finished**.

## See also

- [Manufacturing orders](manufacturing-orders.md)
- [Plan and schedule](plan-and-schedule.md)
- [Produce and consume](produce-and-consume.md)
- [Work centers](../advanced-configuration/work-centers.md)
