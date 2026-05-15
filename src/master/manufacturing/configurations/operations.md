# Operations

In the **Manufacturing** module, an **Operation** represents a single step in the production process — for example *Cutting*, *Welding*, *Assembly*, *Painting*, or *Packaging*.  
Operations are linked to **Work Centers** (where they run) and **Bills of Material** (the products that require them). Together, they form the **routing** that turns raw components into finished goods.

**Use Case:**  
Define every distinct task on your shop floor as an Operation so that when a [Manufacturing Order](../operations/manufacturing-orders.md) is launched, the system automatically generates the right [Work Orders](../operations/work-orders.md) at the right [Work Centers](work-centers.md) with the correct expected duration and worksheet instructions.

> **In simple words:** An Operation is one named task in your production process — like *"Cutting"* or *"Painting"*. Operations are attached to a [Bill of Material](../products/bills-of-material.md) and tell the system *which step* happens *where*.

> Operations are only available when **Work Orders** is enabled in [Manufacturing Settings](../settings.md).

## Steps to Create a New Operation

1. Navigate to **`Manufacturing → Configurations → Operations`** as shown below:

   <ImagePopup src="/images1/manufacturing/operation_navigation.png" alt="Operations Navigation" />

2. Click the **New Operation** button at the top right.

   <ImagePopup src="/images1/manufacturing/operation_create_button.png" alt="Create Operation Button" />

3. Fill in the following details:

   #### General Section

   - **_Operation:_** The name of the operation (e.g. `Cutting`, `Assembly`, `Quality Check`). This appears on work orders and worksheets.
   - **_Bill of Material:_** Select the [Bill of Material](../products/bills-of-material.md) this operation belongs to. The operation will be included whenever this BoM is produced.
   - **_Work Center:_** Choose the [Work Center](work-centers.md) where this operation must be performed. The work order will be routed there automatically.
   - **_Apply on Variants:_** Restrict this operation to specific product variants (e.g. only the *Large* size needs the *Reinforcement* step). Leave empty to apply to all variants.
   - **_Company:_** The company that owns this operation record.
   - **_Blocked By:_** Select other operations that must finish **before** this one can start. Used to enforce sequence on the shop floor (e.g. *Painting* is blocked by *Assembly*). Requires **Work Order Dependencies** to be enabled in settings.

   <ImagePopup src="/images1/manufacturing/operation_general_section.png" alt="Operation General Section" />

   #### Settings Section

   - **_Duration Computation:_** Choose how the system estimates the time for this operation.
     - **Set Duration Manually** – Always use the *Default Duration* you enter below.
     - **Compute Based on Tracked Time** – Use the **average real duration** of the last N completed work orders for automatic learning.
   - **_Based On (last … work orders):_** Visible only when *Compute Based on Tracked Time* is selected. Enter how many recent work orders should be averaged to predict the next duration (e.g. last `10` work orders).
   - **_Default Duration (minutes):_** The fallback expected duration of the operation. Used directly when the time mode is manual, and used as the initial value before enough data is collected in automatic mode.

   <ImagePopup src="/images1/manufacturing/operation_settings_section.png" alt="Operation Settings Section" />

   #### Work Sheet Section

   Worksheets give shop-floor operators clear instructions for completing the operation.

   - **_Worksheet:_** Select the format of the work instruction — `PDF`, `Google Slide`, or `Text`.
   - **_PDF:_** Visible when *PDF* is selected. Upload the PDF document operators should follow.
   - **_Google Slide:_** Visible when *Google Slide* is selected. Paste the public Google Slides link.
   - **_Description:_** Free-text instructions describing how the operation must be performed. Visible when the *Text* worksheet type is used.

   <ImagePopup src="/images1/manufacturing/operation_worksheet_section.png" alt="Operation Work Sheet Section" />

4. **Action Buttons:**

   - **Create** – Save and open the operation record.
   - **Create & Create Another** – Save and open a blank form to add another operation.
   - **Cancel** – Discard and return to the list.

## Operation View Page

After creation, you are redirected to the **Operation View Page** which summarizes all the configured information.

<ImagePopup src="/images1/manufacturing/operation_view_page.png" alt="Operation View Page" />

- **View:** Review all operation details, settings, and worksheet.
- **Edit:** Modify any saved field.
- **Delete / Archive:** Remove or archive the operation. Archived operations remain in the database but no longer appear in selection lists.

## List View — Filters & Actions

The **Operations** list view shows every configured operation with the following columns: **Operation**, **Bill of Material**, **Work Center**, **Duration Computation**, **Default Duration**, and **Worksheet**.

You can:

- **Filter by:** Work Center, Duration Computation, or Worksheet type.
- **Bulk Actions:** Archive, restore, or permanently delete selected operations.

<ImagePopup src="/images1/manufacturing/operation_list_view.png" alt="Operation List View" />

### Summary

Operations are the building blocks of your production routing. A well-defined set of operations gives you:

- Predictable scheduling at the right [Work Centers](work-centers.md).
- Clear worksheets for operators.
- Realistic duration estimates that improve over time.
- Sequence control across the shop floor via dependencies.

> **Next step:** Add your operations inside a [Bill of Material](../products/bills-of-material.md). They will then turn into [Work Orders](../operations/work-orders.md) whenever a [Manufacturing Order](../operations/manufacturing-orders.md) is created.
