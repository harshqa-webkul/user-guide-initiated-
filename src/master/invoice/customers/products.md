# Products

The **Products** module in **AureusERP** is where users can manage their goods and services. This guide walks you through the steps to create and manage a product effectively.

## Product Creation

### Steps to Create a Product

1. Navigate to **Invoices >> Customers >> Products >> Create Product**.

   ![Create Product](../../../images/create_product.png)

2. Fill out the form with the following fields:

   ### Basic Details

   - **Name:** Enter the product or service name.
   - **Description:** Optional field to add product details.
   - **Images:** Upload product images as needed.
   - **Tags:**
     > You can **create a new tag** or **select from existing** tags in the dropdown.

   ![Create Product](../../../images/create_product_basic.png)

   ### Settings Section

   - **Type:** Choose between:

     - **Goods**
     - **Service** _(radio buttons)_

   > 🛈 Selecting **Goods** reveals an **Inventory** section at the bottom of the page.

   ### Inventory (Visible if 'Goods' is selected)

   > ![Create Product](../../../images/create_product_inventory.png)

   - **Reference:** Product reference code.
   - **Barcode:** Product barcode.
   - **Category\***:
     - Select an existing category.
     - Or click the ➕ icon to create a new one.
     - By default, **All** is selected.
   - **Company:** Choose from the list of companies (multi-company support).

   ![Create Product](../../../images/create_product_setting.png)

   ### Pricing Section

   - **Price\***: Selling price of the product.
   - **Cost:** Internal cost price.

   ![Create Product](../../../images/create_product_price.png)

3. Action Buttons

   - **Create:** Save and create the product.
   - **Create & Create Another:** Save and reset form for new entry.
   - **Cancel:** Exit the form without saving.

## After Product Creation

Upon clicking **Create**, the system redirects to the **View Product** page.

- **Print Labels:**
  - Opens a modal with the following fields:
    - **Number of Labels\***: Enter number of labels to print.
    - **Format**: Choose label dimension and price inclusion (e.g., 2x7 with price, 4x12 without price).
      ![Create Product](../../../images/create_product_label.png)
  - Clicking **Submit** downloads a PDF of generated labels.
- **Delete:** Permanently removes the product.

![Create Product](../../../images/create_product_view.png)

## Product Management

From the **View Product** page, you can also:

### Edit Product

Update product details.

### Attributes

- Clicking **Attributes** redirects to the **Manage Attributes** page.
- Click **Add Attribute** to open a modal:
  - **Attribute\***: Dropdown to select or create new attribute.
  - **Values\***: Enter the values associated with the selected attribute.
    ![Create Product](../../../images/create_product_attribute_1.png)
    > 🛈 Once created, **variants** for the selected attributes are generated automatically.

![Create Product](../../../images/created_product_attribute.png)

### Variants Management

Manage product variants with the following actions:

- **View**: See variant details.
- **Edit**: Update variant info.
- **Delete**: Remove specific variant.

![Create Product](../../../images/created_product_varients.png)

---
