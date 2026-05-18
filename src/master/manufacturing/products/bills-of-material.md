# Bills of Material

A **Bill of Material (BoM)** is the recipe of a finished product. It defines **which components** are required to produce **one unit** of an item, **in what quantity**, **through which operations**, and **on which work centers**.  
The BoM is the single source of truth used by every manufacturing order to:

- Reserve raw materials.
- Generate work orders.
- Compute lead time and cost.
- Track consumption and produced quantities.

**Use Case:**  
Create a BoM for every product that is **manufactured** (instead of purchased) or every **kit** assembled from existing components for sale or delivery.

> **In simple words:** A Bill of Material is a **recipe**. Just like a cake recipe lists flour, sugar, and eggs, a BoM lists the components and quantities needed to build one finished product.

> **Where it fits:** The BoM is used by the [Manufacturing Order](../operations/manufacturing-orders.md) to know what to consume and which [Work Orders](../operations/work-orders.md) to generate. Make sure the [finished product and its components](products.md) already exist before creating a BoM.

## Steps to Create a New Bill of Material

1. Navigate to **`Manufacturing → Products → Bills of Materials`** as shown below:

   <ImagePopup src="/images1/manufacturing/bom_navigation.png" alt="Bills of Materials Navigation" />

2. Fill in the following details:

   #### General Section

   - **_Reference:_** Unique identifier for the BoM (e.g. `BOM-001`). Useful when a product has multiple BoMs.
   - **_Product:_** The finished product this BoM produces.
   - **_Product Variant:_** If the product has variants, choose the specific variant this BoM applies to. Leave empty for the BoM to apply to **all** variants.
   - **_Quantity:_** The number of finished units produced when this BoM is consumed once (usually `1`).
   - **_UOM:_** Unit of measure for the produced quantity (e.g. *Units*, *Kilograms*).
   - **_Company:_** Company that owns this BoM.

   <ImagePopup src="/images1/manufacturing/bom_general_section.png" alt="BoM General Section" />

   #### Miscellaneous Section

    Fine-tune how the BoM behaves on the manufacturing order.

    - **_Manufacturing Readiness:_** Choose when the manufacturing order should be marked **Ready**:
      - **When components are available** – Ready as soon as all materials are in stock.
      - **When the components for the 1st operation are available** – Ready when only the first operation's components are on hand (useful for long routings).
    - **_Routing:_** Display-only summary of the operations sequence linked to this BoM.
    - **_Flexible Consumption:_** Controls how strictly the system enforces the planned consumption:
      - **Allowed** – Operators can consume more or less without warning.
      - **Allowed with Warning** – Variations are allowed but a warning is shown.
      - **Blocked** – Quantities must match exactly.
    - **_Operation Dependencies:_** Enable to use the **Blocked By** relationships configured on individual operations. Requires *Work Order Dependencies* to be enabled in settings.
    - **_Manufacturing Lead Time (days):_** Overrides the global lead time configured in **Manage Planning** for this specific BoM.
    - **_Days to prepare Manufacturing Order:_** Extra preparation days needed before launching production based on this BoM.

    <ImagePopup src="/images1/manufacturing/bom_miscellaneous_tab.png" alt="BoM Miscellaneous Tab" />

3. Configure the **tabs** below the general section.

### Components Tab

The **Components** tab lists every raw material or sub-assembly required to produce one unit of the finished product.

Click **Add a line** and fill:

- **_Component:_** Select an existing product. You can also create a new one inline by providing **Name**, **Type**, **Category**, **Company**, and **UOM**.
- **_Apply on Variants:_** Restrict this component to specific variants (e.g. only the *Red* variant needs the red dye).
- **_Consumed in Operation:_** Select the operation that consumes this component. Helps allocate raw material withdrawal to the right work order.
- **_Highlight Consumption:_** Toggle to highlight critical components on the manufacturing order for operator attention.
- **_Quantity:_** Quantity of the component required for **one unit** of the finished product.
- **_Product Unit of Measure:_** UOM of the component (auto-filled from the product master).

<ImagePopup src="/images1/manufacturing/bom_components_tab.png" alt="BoM Components Tab" />

### Operations Tab

The **Operations** tab defines the **routing** — every shop-floor step required to assemble the finished product. Available only when **Work Orders** is enabled in [Manufacturing Settings](../settings.md). Each line links an [Operation](../configurations/operations.md) to a [Work Center](../configurations/work-centers.md).

Click **Add a line** to add a new operation, or click **Copy Existing Operations** to import operations from another BoM.

For each operation, configure:

- **_Operation:_** Name of the step (e.g. *Cutting*, *Assembly*).
- **_Work Center:_** Station where the operation runs.
- **_Duration Computation:_** Either *Set Manually* or *Compute Based on Tracked Time*.
- **_Computed on last … work orders:_** When automatic computation is selected, the number of past work orders averaged.
- **_Company:_** Company owning the operation.
- **_Apply on Variants:_** Restrict the operation to selected variants.
- **_Duration (minutes):_** Default time required when manual mode is used.

Use the **Edit Operation** action on a line to open the full operation form (including worksheet and dependencies).

<ImagePopup src="/images1/manufacturing/bom_operations_tab.png" alt="BoM Operations Tab" />


4. **Action Buttons:**

   - **Create** – Save and open the BoM record.
   - **Create & Create Another** – Save and open a blank form to create another BoM.
   - **Cancel** – Discard the entry.

## Bill of Material View Page

After creation, you land on the **BoM View Page** with all tabs and a few extra controls.

- **View:** Read-only summary of the BoM, including general info, components, operations, by-products, and the miscellaneous configuration.
- **Edit:** Modify any field.
- **Overview:** Opens the **BoM Overview** report — a hierarchical, exploded view of the BoM showing every level of components, sub-BoMs, costs, and lead times.

  <ImagePopup src="/images1/manufacturing/bom_overview_page.png" alt="BoM Overview Page" />

- **Print:** Export the BoM as a printable document.
- **Duplicate:** Create a copy to quickly build a variant BoM.
- **Archive / Delete:** Remove a BoM that is no longer used.

## List View — Filters & Actions

The **Bills of Materials** list view shows: **Reference**, **Product**, **Quantity**, **UOM**, **BoM Type**, and **Company**.

You can:

- **Filter by:** Product, BoM Type, or Company.
- **Bulk Actions:** Archive, restore, or permanently delete selected BoMs.

### Summary

A well-built BoM ensures that:

- The right components are reserved automatically when a [Manufacturing Order](../operations/manufacturing-orders.md) is confirmed.
- Operators see the right [Work Orders](../operations/work-orders.md), on the right [Work Centers](../configurations/work-centers.md), in the right sequence.
- Costs and lead times are computed accurately.
- By-products and kits are handled with the same data model as standard production.

> **Next step:** Once your BoM is ready, you can launch production by creating a [Manufacturing Order](../operations/manufacturing-orders.md).
