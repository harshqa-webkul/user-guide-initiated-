# Work Orders

A **Work Order (WO)** represents a **single operation** of a manufacturing order executed at a specific **Work Center**.  
Work orders give shop-floor operators a focused view of what needs to be done, with worksheets, time tracking, and component checklists. They are generated automatically whenever a manufacturing order is confirmed against a BoM that has operations defined.

**Use Case:**  
Use Work Orders to schedule, dispatch, and track every production step in real time. They are essential for businesses that produce items in multiple stages (cutting → assembly → painting → packaging) and want operator-level visibility.

> **In simple words:** If a [Manufacturing Order](./manufacturing-orders.md) says *"build 10 chairs"*, the Work Orders are the individual to-do items for the floor: *"cut the wood", "assemble the frame", "polish the surface"* — each handled at its own station.

> Work Orders are available only when **Work Orders** is enabled in [Manufacturing Settings](../settings.md). Sequencing requires **Work Order Dependencies** to also be enabled. Each work order runs an [Operation](../configurations/operations.md) at a [Work Center](../configurations/work-centers.md).

## Steps to Create a New Work Order

Most work orders are generated automatically when a [Manufacturing Order](./manufacturing-orders.md) is confirmed. You can also create one manually for ad-hoc tasks.

1. Navigate to **`Manufacturing → Operations → Work Orders`** as shown below:

   <ImagePopup src="/images1/manufacturing/wo_navigation.png" alt="Work Orders Navigation" />

2. Click the **New Work Order** button at the top right.

   <ImagePopup src="/images1/manufacturing/wo_create_button.png" alt="Create Work Order Button" />

3. Fill in the following details:

   #### General Section

   - **_Work Order:_** Name/title of the operation (e.g. *Assembly*).
   - **_Work Center:_** Station where the operation runs.
   - **_Product:_** Product being produced or processed at this step.
   - **_Quantity:_** Quantity that must be processed at this work center.
   - **_Manufacturing Order:_** Parent MO this work order belongs to.
   - **_Lot/Serial Number:_** Lot or serial assigned to the produced unit (used when the product is tracked).
   - **_Start Date / End Date:_** Scheduled time window (`Start to End`).
   - **_Expected Duration:_** Planned duration in minutes.
   - **_Real Duration:_** Actual time logged via the **Time Tracking** tab (read-only on the form).

   <ImagePopup src="/images1/manufacturing/wo_general_section.png" alt="Work Order General Section" />

4. Configure the **tabs** below the general section.

### Time Tracking Tab

Records every time block an operator spends on this work order. Multiple operators can contribute.

Click **Add a line** and fill:

- **_User:_** Operator performing the work.
- **_Duration:_** Time spent (auto-computed from start/end).
- **_Start Date / End Date:_** Time window of the block.
- **_Productivity:_** Productivity reason (e.g. *Production*, *Setup*, *Break*, *Quality Control*) — used in OEE reports.

A footer total displays the cumulative **Real Duration**.

<ImagePopup src="/images1/manufacturing/wo_time_tracking_tab.png" alt="Work Order Time Tracking Tab" />

### Components Tab

Shows the components consumed at this work order — either auto-populated from the BoM (linked through *Consumed in Operation*) or added manually.

- **_Product:_** The component.
- **_To Consume:_** Planned quantity.
- **_Quantity:_** Actual consumed quantity (filled in during production).
- **_UoM:_** Unit of measure.

Use **Add a line** to consume an unplanned component.

<ImagePopup src="/images1/manufacturing/wo_components_tab.png" alt="Work Order Components Tab" />

### Work Instruction Tab

Displays the operator instructions configured on the operation.

- **_Operation:_** Linked operation name.
- **_Worksheet:_** Embedded PDF, Google Slide, or text description that operators follow to complete the work.

<ImagePopup src="/images1/manufacturing/wo_work_instruction_tab.png" alt="Work Instruction Tab" />

### Blocked By Tab

Visible when **Work Order Dependencies** is enabled. Lists every work order that must finish before this one becomes **Ready**.

- **_Work Order:_** Predecessor work order.
- **_Work Center:_** Work center of the predecessor.
- **_Status:_** Current status of the predecessor — when all show **Done**, this work order becomes available.

<ImagePopup src="/images1/manufacturing/wo_blocked_by_tab.png" alt="Work Order Blocked By Tab" />

5. **Action Buttons:**

   - **Create** – Save the work order.
   - **Cancel** – Discard the entry.

## Work Order Workflow

After creation (or after the parent MO is confirmed), open the **Work Order View Page** to drive it through its lifecycle.

<ImagePopup src="/images1/manufacturing/wo_view_page.png" alt="Work Order View Page" />

The work order moves through these states:

`Pending` → `Waiting Another Operation` → `Ready` → `In Progress` → `Done` (with optional `Cancelled`).

### Start / Pause / Resume

Operators use **Start** to begin time tracking on the assigned work center. The work order state becomes **In Progress**. They can **Pause** anytime to log a break or quality stop, then **Resume** to continue. Each interval is appended to the **Time Tracking** tab automatically.

<ImagePopup src="/images1/manufacturing/wo_start_action.png" alt="Start Work Order" />

### Done

Click **Done** to mark the operation complete. Quantity Produced is set to the planned quantity (or the recorded actual), the state becomes **Done**, and the next work order in the sequence is unblocked.

<ImagePopup src="/images1/manufacturing/wo_done_action.png" alt="Mark Work Order Done" />

### Cancel

Use **Cancel** to abandon a work order. The state becomes **Cancelled** and downstream work orders inherit the cancellation.

## List View — Filters, Groups & Production Availability

The **Work Orders** list view shows: **Operation**, **Work Center**, **Manufacturing Order**, **Product**, **Quantity Remaining**, **Lot/Serial**, **Start**, **End**, **Expected Duration**, **Real Duration**, and **Status**.

You can:

- **Group by:** Status, Work Center, Manufacturing Order, Product, Start, or End.
- **Filter by:** Work Order, Status, Operation, Work Center, Manufacturing Order, Product, Start/End date, Created at, or Updated at.

A **Production Availability** indicator highlights whether components are *Ready* or *Waiting*, so operators know which orders can be started immediately.

<ImagePopup src="/images1/manufacturing/wo_list_view.png" alt="Work Order List View" />

### Summary

Work Orders bring your manufacturing plan to life on the shop floor:

- Operators see what to do, where, and how, with worksheets attached.
- Real-time **time tracking** feeds productivity and OEE reports.
- **Dependencies** keep [Operations](../configurations/operations.md) in the correct sequence automatically.
- Component consumption is recorded at the exact step where it happens, giving you accurate cost and traceability data.

> **Related:** Work Orders are generated and driven by the [Manufacturing Order](./manufacturing-orders.md). To change a step's default duration or worksheet, edit its [Operation](../configurations/operations.md).
