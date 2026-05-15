# Manufacturing Orders

A **Manufacturing Order (MO)** is the primary document that drives production. It tells the system **what to produce**, **how many units**, **from which BoM**, **by when**, and **who is responsible**.  
Once confirmed, an MO automatically:

- Reserves the required components from stock.
- Generates the underlying **Work Orders** (when Work Orders is enabled).
- Tracks consumption, by-products, and finished output.
- Updates inventory upon completion.

**Use Case:**  
Create a Manufacturing Order every time you need to launch production — whether on customer demand, to replenish stock, or for an internal project.

> **In simple words:** A Manufacturing Order is like a "production work ticket". It says *"Make 10 chairs, using this recipe, starting on this date."* The system then handles the rest — reserving wood, screws, and fabric, and telling each operator what to do.

## Before You Begin — Setup Checklist

A Manufacturing Order is the **last step** of the manufacturing process. Before you can create one, a few building blocks must already exist in the system. Complete them in this order:

| Step | What to set up | Where | Guide |
| ---- | -------------- | ----- | ----- |
| 1 | The **finished product** you want to manufacture | `Manufacturing → Products → Products` | [Products](../products/products.md) |
| 2 | The **raw materials / components** used to build it | `Manufacturing → Products → Products` | [Products](../products/products.md) |
| 3 | The **Work Centers** where production happens *(optional — only if Work Orders is enabled)* | `Manufacturing → Configurations → Work Centers` | [Work Centers](../configurations/work-centers.md) |
| 4 | The **Bill of Material (BoM)** — the recipe linking the product to its components | `Manufacturing → Products → Bills of Materials` | [Bills of Material](../products/bills-of-material.md) |
| 5 | The **Operations** — the shop-floor steps inside the BoM *(optional — only if Work Orders is enabled)* | `Manufacturing → Configurations → Operations` | [Operations](../configurations/operations.md) |
| 6 | The **Manufacturing Order** itself | `Manufacturing → Operations → Manufacturing Orders` | This page |

> You also need the right capabilities switched on. Review the [Manufacturing Settings](../settings.md) page to enable **Work Orders**, **Work Order Dependencies**, or **Byproducts** depending on how detailed your production process is.

### Enabling the 3-Step Manufacturing Route

By default, manufacturing happens in a single step (components go straight into production and finished goods go straight to stock). If you want a more controlled flow — **pick the components → manufacture → store the finished product** — you must enable the **3-step manufacturing route** on your warehouse.

1. **Turn on multi-step routes.** Navigate to **`Inventory → Settings → Manage Warehouses`** and enable **Multi Steps Routes**, then click **Save Changes**. See the [Inventory Settings](../../inventories/settings.md) guide.

   <ImagePopup src="/images1/manufacturing/mo_enable_multi_step_routes.png" alt="Enable Multi Steps Routes" />

2. **Edit the warehouse.** Navigate to **`Inventory → Configurations → Warehouse Management`**, open the warehouse you produce in, and click **Edit**. See the [Warehouse Management](../../inventories/configurations/warehouse-management.md) guide.

   <ImagePopup src="/images1/manufacturing/mo_warehouse_edit.png" alt="Edit Warehouse" />

3. **Select the 3-step manufacturing option.** In the warehouse form, find the **Manufacturing** setting and choose **Manufacture in 3 Steps (Pick components → Manufacture → Store)**.

   <ImagePopup src="/images1/manufacturing/mo_three_step_manufacturing.png" alt="Enable 3 Step Manufacturing" />

4. **Save it.** Click **Save**. The system automatically creates the extra locations and operation types (e.g. *Pick Components*, *Manufacturing*, *Store Finished Product*) needed for the 3-step flow.

> **Tip:** Choose **1 Step** for simple production and **3 Steps** when you need to formally pick materials before production and put finished goods away after — useful for larger warehouses and audit trails.

## Steps to Create a New Manufacturing Order

1. Navigate to **`Manufacturing → Operations → Manufacturing Orders`** as shown below:

   <ImagePopup src="/images1/manufacturing/mo_navigation.png" alt="Manufacturing Orders Navigation" />

2. Click the **New Manufacturing Order** button at the top right.

   <ImagePopup src="/images1/manufacturing/mo_create_button.png" alt="Create Manufacturing Order Button" />

3. Fill in the following details:

   #### General Section

   - **_Product:_** The finished product to manufacture. It must already exist in [Products](../products/products.md).
   - **_Quantity:_** Number of units to produce.
   - **_UoM:_** Unit of measure for the quantity (auto-filled from the product).
   - **_Bill of Material:_** Choose which [Bill of Material](../products/bills-of-material.md) (recipe) to use. If the product has only one BoM, it is selected automatically.
   - **_Scheduled Date:_** Planned **start date** of production. The system uses this date along with the BoM lead time to plan operations.
   - **_Scheduled End:_** Expected **completion date** based on operation durations.
   - **_Responsible:_** User accountable for this manufacturing order.
   - **_To Produce:_** Image preview of the finished product (read-only).

   <ImagePopup src="/images1/manufacturing/mo_general_section.png" alt="MO General Section" />

4. Configure the **tabs** below the general section.

### Components Tab

Lists every raw material required to produce the planned quantity. Populated automatically from the selected BoM and refreshed whenever the quantity changes.

For each line:

- **_Product:_** The component.
- **_From:_** Source location (where the component will be picked from).
- **_To Consume:_** Quantity required for this MO. If the available stock is below this number, a tooltip indicates **Insufficient quantity available**.
- **_Quantity:_** Actual quantity consumed (filled in when production starts).
- **_UoM:_** Unit of measure.
- **_Forecast:_** Projected on-hand level after this MO consumes the component.

You can click **Add a line** to add an unplanned component on the fly.

<ImagePopup src="/images1/manufacturing/mo_components_tab.png" alt="MO Components Tab" />

> When the manufacturing process is still being built, you will see the note **"Components will be generated as the manufacturing process is built."** Confirm the BoM/quantity first to populate this tab.

### Work Orders Tab

Visible when **Work Orders** is enabled. Lists every [Work Order](./work-orders.md) generated from the BoM's [Operations](../configurations/operations.md).

Columns:

- **_Operation:_** The step name (e.g. *Cutting*).
- **_Work Center:_** Where the step runs.
- **_Product:_** Item being produced.
- **_Quantity Remaining / Produced:_** Live counters updated as operators record progress.
- **_Start / End:_** Scheduled or actual times.
- **_Expected Duration / Real Duration:_** Compare planned vs. tracked time.
- **_Status:_** Workflow state (Ready, In Progress, Pending, Done…).
- **_Lot/Serial:_** Lot or serial assigned at this step.

<ImagePopup src="/images1/manufacturing/mo_work_orders_tab.png" alt="MO Work Orders Tab" />

### By-Products Tab

Visible when **Byproducts** is enabled in settings. Shows the secondary outputs of this MO.

- **_Product:_** The by-product.
- **_To:_** Destination location where it will be stored.
- **_To Produce:_** Planned quantity.
- **_UoM:_** Unit of measure.

<ImagePopup src="/images1/manufacturing/mo_byproducts_tab.png" alt="MO By-Products Tab" />

### Miscellaneous Tab

- **_Operation Type:_** Warehouse operation that records the production (e.g. `Primary Warehouse: Manufacturing`).
- **_Source:_** Origin document — for example a sales order, replenishment, or another MO — that triggered this production.
- **_Finished Products Location:_** Stock location where finished units will be deposited (e.g. `Primary/Stock`).
- **_Company:_** Company that owns the MO.

<ImagePopup src="/images1/manufacturing/mo_miscellaneous_tab.png" alt="MO Miscellaneous Tab" />

5. **Action Buttons:**

   - **Create** – Save the MO as a Draft.
   - **Create & Create Another** – Save and open another blank MO.
   - **Cancel** – Discard.

## Manufacturing Order Workflow

After creation, you are redirected to the **MO View Page** which exposes the full workflow.

<ImagePopup src="/images1/manufacturing/mo_view_page.png" alt="Manufacturing Order View Page" />

The MO progresses through the following states:

`Draft` → `Confirmed` → `Planned` → `In Progress` → `To Close` → `Done`

(with optional `Cancelled` from any state before completion.)

### Confirm

Click **Confirm** to validate the MO. The system reserves components, generates work orders, and changes the state to **Confirmed**.

<ImagePopup src="/images1/manufacturing/mo_confirm_action.png" alt="Confirm Manufacturing Order" />

### Plan

Click **Plan** to schedule each [Work Order](./work-orders.md) on its [Work Center](../configurations/work-centers.md) based on capacity and dependencies. State becomes **Planned**.

<ImagePopup src="/images1/manufacturing/mo_plan_action.png" alt="Plan Manufacturing Order" />

### Unplan

Click **Unplan** to release the scheduled slots — useful if dates or priorities change. The MO returns to **Confirmed**.

<ImagePopup src="/images1/manufacturing/mo_unplan_action.png" alt="Unplan Manufacturing Order" />

### Start

Click **Start** to mark production as actively in progress. The first [Work Order](./work-orders.md) becomes available to operators. State becomes **In Progress**.

<ImagePopup src="/images1/manufacturing/mo_start_action.png" alt="Start Manufacturing Order" />

### Produce All

Click **Produce All** to validate the MO and post the finished quantity to stock. If consumption or produced quantities differ from the plan, the system shows a **Consumption Warning** or **Produced is different than expected** dialog so you can:

- Confirm with the current quantities, **or**
- Click **Set Quantities and Confirm** to keep the planned values.

State becomes **Done** and inventory is updated.

<ImagePopup src="/images1/manufacturing/mo_produce_all_action.png" alt="Produce All Action" />
<ImagePopup src="/images1/manufacturing/mo_consumption_warning.png" alt="Consumption Warning Modal" />

### Cancel

Click **Cancel** at any point before completion to abort the MO. Reserved components are released. State becomes **Cancelled**.

<ImagePopup src="/images1/manufacturing/mo_cancel_action.png" alt="Cancel Manufacturing Order" />

### Other Page Actions

- **Overview:** Open the MO overview report with a full hierarchical breakdown of components, costs, and durations.

  <ImagePopup src="/images1/manufacturing/mo_overview_page.png" alt="Manufacturing Order Overview" />

- **Transfers:** Open the **Manage Transfers** sub-tab to view every stock move triggered by this MO (component picks, finished product put-away, scraps).

  <ImagePopup src="/images1/manufacturing/mo_transfers_tab.png" alt="Manufacturing Order Transfers" />

- **Print MO / Print Labels:** Generate a printable order sheet or product labels for shop-floor use.

  <ImagePopup src="/images1/manufacturing/mo_print_actions.png" alt="Print Manufacturing Order" />

- **Edit / Delete:** Modify or remove the MO (only in draft / cancelled states).

## List View — Filters, Groups & Reservation State

The **Manufacturing Orders** list shows: **Reference**, **Product**, **Bill of Material**, **Quantity**, **Scheduled Date**, **Responsible**, **State**, and **Consumption Efficiency**.

You can:

- **Group by:** State, Product, BoM, Responsible, or Scheduled Date.
- **Filter by:** State, reservation state, product, responsible, or scheduled date range.

A color-coded badge on each row indicates the **Reservation State** (e.g. *Confirmed*, *Waiting Another Operation*, *Ready*) so you can spot blocked orders instantly.

<ImagePopup src="/images1/manufacturing/mo_list_view.png" alt="Manufacturing Order List View" />

### Summary

A Manufacturing Order is the **central hub** of production — it ties together the [Bill of Material](../products/bills-of-material.md), components, [Work Orders](./work-orders.md), by-products, and transfers.  
Use the workflow buttons (**Confirm → Plan → Start → Produce All**) to drive it through its lifecycle, and rely on the overview and transfers tabs to verify the full picture before marking it complete.

## Complete Manufacturing Flow — Start to End

The diagram below shows the **full journey**, from the very first setup step to a finished product in stock. Steps **1–5** are one-time setup (do them once, reuse them forever). Steps **6–7** are repeated every time you produce something.

```text
        ┌──────────────────────── ONE-TIME SETUP ────────────────────────┐

  STEP 1                STEP 2                 STEP 3
┌─────────────┐      ┌──────────────┐      ┌──────────────┐
│  Create the │      │  Create the  │      │   Create     │
│  FINISHED   │ ───▶ │ RAW MATERIAL │ ───▶ │ WORK CENTERS │
│  PRODUCT    │      │ / COMPONENTS │      │ (where work  │
│ to be made  │      │ used to make │      │  is done)    │
│             │      │   it         │      │  *optional*  │
└─────────────┘      └──────────────┘      └──────────────┘
                                                   │
                                                   ▼
  STEP 6                STEP 5                 STEP 4
┌─────────────┐      ┌──────────────┐      ┌──────────────┐
│  Create the │      │   Add the    │      │  Create the  │
│ MANUFACTURING│ ◀── │  OPERATIONS  │ ◀── │ BILL OF      │
│   ORDER     │      │ (shop-floor  │      │ MATERIAL     │
│   (MO)      │      │  steps)      │      │ (the recipe) │
│             │      │  *optional*  │      │              │
└─────────────┘      └──────────────┘      └──────────────┘
        │
        └──────────────────────── PRODUCTION RUN ────────────────────────┐

  STEP 7 — Run the Manufacturing Order through its workflow:

   Draft ─▶ Confirm ─▶ Plan ─▶ Start ─▶ Produce All ─▶ Done
            (reserve   (schedule (begin    (finish &       (finished
            materials） work     work)     post to stock)   goods in
                       orders)                              inventory)
```

### Step-by-step explanation

1. **Create the finished product** — Add the item you want to manufacture (e.g. *Wooden Chair*). See [Products](../products/products.md).
2. **Create the raw materials / components** — Add every part needed to build it (e.g. *Wood Plank*, *Screws*, *Fabric*). These are also created as products. See [Products](../products/products.md).
3. **Create the Work Centers** *(optional)* — Set up the machines or stations where production happens (e.g. *Cutting Station*, *Assembly Line*). Needed only if **Work Orders** is enabled. See [Work Centers](../configurations/work-centers.md).
4. **Create the Bill of Material (BoM)** — Build the "recipe" that links the finished product to its components and quantities. See [Bills of Material](../products/bills-of-material.md).
5. **Add the Operations** *(optional)* — Inside the BoM, define the shop-floor steps (e.g. *Cut → Assemble → Polish*) and assign each to a work center. Needed only if **Work Orders** is enabled. See [Operations](../configurations/operations.md).
6. **Create the Manufacturing Order (MO)** — Choose the product, quantity, BoM, and dates. The MO pulls in components and work orders automatically.
7. **Run the MO workflow** — Drive the order through **Confirm → Plan → Start → Produce All**. When it reaches **Done**, the finished product is added to stock and the components are consumed.

> **Quick mental model:** *Product + Components = the "what"*, *BoM + Operations + Work Centers = the "how"*, and the *Manufacturing Order = the "do it now"*.
