# Products

The **Products** menu inside the Manufacturing module gives you a dedicated view of every item that can be produced, consumed, or tracked during manufacturing.  
From here you can manage product master data, variants, attributes, and quickly jump to the **Bills of Material**, **Stock Moves**, and **On-Hand Quantities** linked to each product.

**Use Case:**  
Use this section to manage the catalog of items used on the shop floor — finished goods, sub-assemblies, raw materials, and components — and to launch BoM creation right from the product page.

> **In simple words:** Every *thing* in manufacturing — the chair you build **and** the wood and screws you build it from — is a "Product". Create them all here first, before building a [Bill of Material](bills-of-material.md).

## Steps to Create a New Manufacturing Product

1. Navigate to **`Manufacturing → Products → Products`** as shown below:

   <ImagePopup src="/images1/manufacturing/product_navigation.png" alt="Manufacturing Products Navigation" />

2. Fill in the standard product fields (the same form used in the Inventory module):

   - **_Name:_** Product name displayed everywhere it is referenced.
   - **_Type:_** Choose between `Goods` (stockable / consumable) or `Service`. Manufacturing typically uses `Goods`.
   - **_Reference / Internal Reference:_** Unique SKU or internal code.
   - **_Sales Price / Cost:_** Default selling and cost values used in orders and valuations.
   - **_Category:_** Product category used for routing, reporting, and accounting.
   - **_Unit of Measure:_** Default unit (e.g. *Units*, *Kilograms*, *Liters*).
   - **_Tracking:_** Choose `No Tracking`, `By Lots`, or `By Unique Serial Number` if you need traceability.
   - **_Image:_** Upload a product photo shown in lists and work orders.
   - **_Tags & Attributes:_** Add tags and define attribute values (size, color, etc.) used for variants.

   <ImagePopup src="/images1/manufacturing/product_general_section.png" alt="Product General Section" />

3. **Action Buttons:**

   - **Create** – Save and open the product record.
   - **Create & Create Another** – Save and open a blank form for the next product.
   - **Cancel** – Discard and return to the list.

## Product View Page — Manufacturing Sub-Tabs

After saving, the product opens with a manufacturing-aware sub-navigation:

<ImagePopup src="/images1/manufacturing/product_view_page.png" alt="Manufacturing Product View Page" />

- **View:** Read-only summary of the product master data.
- **Edit:** Modify product fields.
- **Attributes:** Manage product attributes (e.g. *Color*, *Size*) used to generate variants.
- **Variants:** View and manage every variant generated from the configured attributes.
- **Bills of Materials:** List and create [BoMs](bills-of-material.md) for this product. Click **Create Bill of Material** to launch the BoM editor pre-filled with this product.

  <ImagePopup src="/images1/manufacturing/product_bom_tab.png" alt="Product Bills of Material Tab" />

- **On Hand Quantities:** See current stock levels per location, lot, and package.
- **Moves:** Review every stock move (incoming, outgoing, internal) involving the product.

## List View — Filters & Actions

The **Products** list view shows manufacturing-relevant items along with image, reference, price, cost, and category.

You can:

- **Filter by:** Type, Category, Tags, Tracking method, or Company.
- **Search:** By name or internal reference.
- **Bulk Actions:** Archive, restore, or delete selected products.

   <ImagePopup src="/images1/manufacturing/product_list_view.png" alt="Product List View" />
>

### Summary

The Manufacturing **Products** section is your launchpad for everything related to a producible item:

- Maintain master data and variants.
- Create and update [Bills of Material](bills-of-material.md).
- Inspect on-hand stock and the full history of moves.
- Track items by [Lot/Serial Number](lots.md) when traceability is required.

> **Next step:** After creating your finished product and its components, build the recipe in [Bills of Material](bills-of-material.md).
