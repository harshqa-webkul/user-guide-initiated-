# Work Orders

A **Work Order (WO)** represents a **single operation** of a manufacturing order executed at a specific **Work Center**.  
Work orders give shop-floor operators a focused view of what needs to be done, with worksheets, time tracking, and component checklists.

**Use Case:**  
Use Work Orders to schedule, dispatch, and track every production step in real time. They are essential for businesses that produce items in multiple stages (cutting → assembly → painting → packaging) and want operator-level visibility.

> **In simple words:** If a [Manufacturing Order](./manufacturing-orders.md) says *"build 10 chairs"*, the Work Orders are the individual to-do items for the floor: *"cut the wood", "assemble the frame", "polish the surface"* — each handled at its own station.

> Work Orders are available only when **Work Orders** is enabled in [Manufacturing Settings](../settings.md). Sequencing requires **Work Order Dependencies** to also be enabled. Each work order runs an [Operation](../configurations/operations.md) at a [Work Center](../configurations/work-centers.md).

## How Work Orders Are Created

Work orders are **generated automatically — there is no manual creation step**. When you confirm a [Manufacturing Order](./manufacturing-orders.md) whose [Bill of Material](../products/bills-of-material.md) has [Operations](../configurations/operations.md) defined, the system creates **one work order for each operation**.

To open them, navigate to **`Manufacturing → Operations → Work Orders`** as shown below:

<ImagePopup src="/images1/manufacturing/wo_navigation.png" alt="Work Orders Navigation" />

## Work Order List — Start, Stop & Finish

The **Work Orders** list shows **every operation across all manufacturing orders** in one place, so operators always know what to run next. Each row displays: **Operation**, **Work Center**, **Manufacturing Order**, **Product**, **Quantity Remaining**, **Lot/Serial**, **Start**, **End**, **Expected Duration**, **Real Duration**, and **Status**.

Each row carries inline controls to run the operation directly from the list:

- **Start** — begins the operation and starts a **live timer**. The **Real Duration** counts up in real time and the status changes to **In Progress**.
- **Stop** — pauses the timer (for a break, setup, or quality stop). The elapsed interval is saved to the **Time Tracking** tab; press **Start** again to resume.
- **Finish** — marks the operation complete once the work is done. The status changes to **Finished** and the next work order in the sequence is unblocked.

<ImagePopup src="/images1/manufacturing/wo_list_view.png" alt="Work Order List View" />

You can also:

- **Group by:** Status, Work Center, Manufacturing Order, Product, Start, or End.
- **Filter by:** Work Order, Status, Operation, Work Center, Manufacturing Order, Product, Start/End date, Created at, or Updated at.

> The **Real Duration** is calculated automatically from every Start/Stop interval — operators never type it in by hand.

## Work Order Stages

A work order moves through the following stages:

`Waiting for another Work Order` → `Waiting for Components` → `Ready` → `In Progress` → `Finished`

| Stage | Meaning |
| ----- | ------- |
| **Waiting for another Work Order** | A predecessor operation (listed in the **Blocked By** tab) has not finished yet. |
| **Waiting for Components** | The components needed for this step are not yet available in stock. |
| **Ready** | All dependencies and components are satisfied — the operation can be started. |
| **In Progress** | An operator has clicked **Start**; the timer is running. |
| **Finished** | The operation is complete. |

## Work Order View Page

Click **View** on any row to open the **Work Order View Page**, where you can run the operation and see its full detail.

<ImagePopup src="/images1/manufacturing/wo_view_page.png" alt="Work Order View Page" />

The general section shows the key details of the operation:

- **_Work Order:_** Name/title of the operation (e.g. *Assembly*).
- **_Work Center:_** Station where the operation runs.
- **_Product:_** Product being produced or processed at this step.
- **_Quantity:_** Quantity that must be processed at this work center.
- **_Manufacturing Order:_** Parent MO this work order belongs to.
- **_Lot/Serial Number:_** Lot or serial assigned to the produced unit (used when the product is tracked).
- **_Start Date / End Date:_** Scheduled time window (`Start to End`).
- **_Expected Duration:_** Planned duration in minutes.
- **_Real Duration:_** Actual time logged via the Start/Stop timer (read-only).

<ImagePopup src="/images1/manufacturing/wo_general_section.png" alt="Work Order General Section" />

The view page also exposes the same **Start**, **Stop**, and **Finish** controls as the list, plus the following tabs.

### Time Tracking Tab

Records every time block logged against this work order. Multiple operators can contribute, and every Start/Stop interval is appended here automatically.

- **_User:_** Operator performing the work.
- **_Duration:_** Time spent (auto-computed from start/end).
- **_Start Date / End Date:_** Time window of the block.
- **_Productivity:_** Productivity reason (e.g. *Production*, *Setup*, *Break*, *Quality Control*) — used in OEE reports.

A footer total displays the cumulative **Real Duration**.

<ImagePopup src="/images1/manufacturing/wo_time_tracking_tab.png" alt="Work Order Time Tracking Tab" />

### Components Tab

Shows the components consumed at this work order — auto-populated from the BoM (linked through *Consumed in Operation*).

- **_Product:_** The component.
- **_To Consume:_** Planned quantity.
- **_Quantity:_** Actual consumed quantity (filled in during production).
- **_UoM:_** Unit of measure.

### Work Instruction Tab

Displays the operator instructions configured on the operation.

- **_Operation:_** Linked operation name.
- **_Worksheet:_** Embedded PDF, Google Slide, or text description that operators follow to complete the work.

<ImagePopup src="/images1/manufacturing/wo_work_instruction_tab.png" alt="Work Instruction Tab" />

### Blocked By Tab

Visible when **Work Order Dependencies** is enabled. Lists every work order that must finish before this one becomes **Ready** — while any predecessor is unfinished, this work order stays in the **Waiting for another Work Order** stage.

- **_Work Order:_** Predecessor work order.
- **_Work Center:_** Work center of the predecessor.
- **_Status:_** Current status of the predecessor — when all show **Finished**, this work order becomes available.

## Running a Work Order

1. From the **Work Orders** list (or the view page), find an operation in the **Ready** stage.
2. Click **Start** to begin — the timer runs and the status becomes **In Progress**.

   <ImagePopup src="/images1/manufacturing/wo_list_view.png" alt="Work Order List View" />

3. Click **Stop** to pause for a break or quality stop; click **Start** again to resume. Every interval is saved to the **Time Tracking** tab.
4. When the work is complete, click **Finish**. The status becomes **Finished** and the next work order in the sequence is unblocked.

   <ImagePopup src="/images1/manufacturing/wo_done_action.png" alt="Finish Work Order" />

### Summary

Work Orders bring your manufacturing plan to life on the shop floor:

- They are created automatically when a [Manufacturing Order](./manufacturing-orders.md) is confirmed — one per operation.
- Operators run them straight from the list with **Start / Stop / Finish** controls.
- Real-time **time tracking** feeds productivity and OEE reports.
- **Dependencies** keep [Operations](../configurations/operations.md) in the correct sequence automatically.
- Component consumption is recorded at the exact step where it happens, giving you accurate cost and traceability data.

> **Related:** Work Orders are generated and driven by the [Manufacturing Order](./manufacturing-orders.md). To change a step's default duration or worksheet, edit its [Operation](../configurations/operations.md).
